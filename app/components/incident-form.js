/*global GeoSearch*/

import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import $ from 'jquery';

export default Component.extend(FindQuery, {
  store: service(),
  init() {
    this._super(...arguments);
    // components share the same properties across instances
    if (this.incident) {
      this.location = this.incident.get('location');
      this.units = this.incident.get('units');
    } else {
      this.incident = {};
      // @TODO: Make Active the default status
      this.location = {address: '', description: ''};
      this.note = {author: 'Original dispatcher', content: ''};
      this.units = [];
    }
    fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwdMu3lgUaMPqA-ESlmhD12Yo6Jz78LlCM8cMQXW7Cm4O94sAA/exec?id=1kiv-ELXw9Z-LcfZ87dFlBDN4GMdjZv_Iz5DSxTH_Cd4&sheet=Radio%20IDs')
      .then((response) => {
        response.json().then((data) => {
          this.radioIds = data['Radio IDs'];
        })
      })
      .catch(() => {
        this.radioIds = {};
        alert('Could not fetch radio ID list');
      });
    this.set('geosearchProvider', new GeoSearch.GoogleProvider({
      params: {
        key: 'AIzaSyDrvC1g6VOozblroTwleGRz9SJDN82F_gE',
        bounds: '41.60218817897012,-87.9728821400663|42.05134582102988,-87.37011785993366'
      },
    }));
    this.agencies = [];
    this.model.agencies.forEach((agency) => {
      set(this.agencies, get(agency, 'slug'), agency); // set the array key of an agency to be its slug
    });
  },
  actions: {
    searchUnit(unit) {
      // use https://github.com/fent/randexp.js to generate units
      // on comma:
      // 1. do radio id search
      // 2. if result, get agency, get text
      // 3. if unit already exists, use it, if not then make a new unit
      let unitResult = {searchResult: true, radioId: unit.trim(), agency: '', level1: '', level2: '', level3: '', level4: ''};

      let matches = [];
      this.radioIds.forEach((row) => {
        if (unitResult.radioId.match('^' + row.ID_Number + '$')) {
          matches.push(row);
        }
      });
      if (matches.length > 0) {
        matches.forEach((match) => {
          if (match.Agency.length) {
            unitResult.agency = match.Agency;
          }
          if (match.Level_1.length) {
            unitResult.level1 = match.Level_1;
          }
          if (match.Level_2.length) {
            unitResult.level2 = match.Level_2;
          }
          if (match.Level_3.length) {
            unitResult.level3 = match.Level_3;
          }
          if (match.Level_4.length) {
            if (match.Level_4 === 'Beat Car') {
              unitResult.level4 = 'Beat #' + unitResult.radioId.match(/\d+/)[0];
            } else {
              unitResult.level4 = match.Level_4;
            }
          }
        });
        return [unitResult];
      }
      return [];
    },
    setUnits(units) {
      Promise.all(units.map(unit => {
        // only do this for new results from search
        if (undefined !== unit.searchResult) {
          set(unit, 'searchResult', false); // set to false so it appears the same in template
          return new Promise((resolve, reject) => {
            this.filterEqual(this.get('store'), 'unit', {radioId: unit.radioId}, (units) => {
              let first = units.get('firstObject');
              if (first) {
                resolve(first);
              } else {
                let record = this.get('store').createRecord('unit', {
                  agency: this.get('agencies')[unit.agency.toLowerCase()],
                  radioId: unit.radioId
                });
                record.save().then(() => {
                  resolve(record);
                }).catch((err) => {
                  alert('Could not save unit');
                  reject(err.errors);
                });
              }
            });
          });
        } else {
          return Promise.resolve(unit);
        }
      })).then((unitModels) => {
        this.set('units', unitModels);
      });
    },
    setLocation(locationModel) {
      let address = get(locationModel, 'address');
      return new Promise((resolve, reject) => {
        this.get('geosearchProvider').search({query: address}).then((results) => {
          if (results && results.length > 0) {
            let location = results[0].raw;
            let latlng = L.latLng(location.geometry.location.lat, location.geometry.location.lng);

            let incidentMarker = L.marker(latlng, {
              icon: L.AwesomeMarkers.icon({
                icon: 'exclamation-circle',
                prefix: 'fa',
                markerColor: 'red'
              })
            });

            // this is a really hacky way to make a popup, we should stop doing it
            // @TODO: Use Handlebars template to make Leaflet popup
            let popupContents = '<h6>' + this.get('incident.type.value') + '</h6>' +
              '<strong>Status:</strong> ' + this.get('incident.status.value') +
              '<br><strong>Nature of call:</strong> ' + this.get('incident.nature') +
              '<br><strong>Location:</strong> ' + location.formatted_address +
              '<br><button class="btn btn-sm btn-primary" onclick="$(\'#incident-row-' + this.get('incident.id') + ' button\').click()">Open Details</button>';
            incidentMarker.bindPopup(popupContents).openPopup();

            set(locationModel, 'layer', incidentMarker);
          }
          resolve(locationModel);
        }).catch((err) => {
          console.error(err);
          resolve(locationModel);
        });
      });
    },
    create() {
      let incident = this.get('store').createRecord('incident', this.get('incident'));

      let note = this.get('store').createRecord('note', this.get('note'));
      incident.get('notes').pushObject(note);

      let location = this.get('store').createRecord('location', this.get('location'));
      incident.set('location', location);
      (this.actions.setLocation.bind(this))(location).then((updatedLocation) => {
        location = updatedLocation;
      });

      incident.set('units', this.get('units'));
      location.save()
        .then(() => {
          note.save()
            .then(() => {
              incident.save()
                .then(() => {
                  $('#add-incident-modal').modal('hide');
                })
                .catch((e) => {
                  console.error(e.errors)
                });
            })
            .catch((e) => {
              console.error(e.errors)
            });
        })
        .catch((e) => {
          console.error(e.errors)
        });
    },
    update() {
      // we use .content as the model is on the content property
      (this.actions.setLocation.bind(this))(this.get('location').content).then((updatedLocation) => {
        updatedLocation.save();
      });
      this.set('incident.units', this.get('units'));
      this.get('incident').save().then(() => {
        $('#update-incident-modal').modal('hide');
        alert('Updated successfully!');
      });
    },
    close() {
      this.get('openIncidents').removeObject(this.get('incident'));
      $('#cadTabs #map-tab').tab('show');
    },
    delete() {
      // @TODO: delete related models
      this.get('incident').destroyRecord().then(() => {
        this.get('openIncidents').removeObject(this.get('incident'));
        $('#cadTabs #map-tab').tab('show');
      });
    },
  }
});
