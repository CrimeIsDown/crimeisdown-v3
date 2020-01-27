/*eslint-disable no-unused-vars*/
/*global GeoSearch*/

import Component from '@ember/component';
import { get } from '@ember/object';
import { schedule } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import moment from 'moment';
import ENV from '../config/environment';

export default Component.extend({
  addressLookup: service(),
  showIncidentTable: ENV.APP.INCIDENT_CAD_ENABLED,

  init() {
    this._super(...arguments);
    this.map = null;
    this.geocoder = null;
    this.baseLayers = {};
    this.layers = {};
    this.overlay = {};
    this.location = {};
  },

  didInsertElement() {
    L.Icon.Default.imagePath = '/assets/images/';
    this.initMap();
  },

  actions: {
    searchAddress(address) {
      let fireStationResults = this.addressLookup.findStation(address);
      if (fireStationResults.length) {
        address = fireStationResults[0].addr + ' ' + fireStationResults[0].zip;
      }
      $('.leaflet-control-geosearch.bar form input').val(address);
      $('#address-search').find('input[name="address"]').val(address);
      this.searchControl.searchElement.handleSubmit({ query: address });
    },
    locateMe() {
      this.map.locate({setView: true, maxZoom: 16});

      this.map.on('locationfound', e => {
        let radius = e.accuracy * 3.28084; // convert radius to feet

        L.marker(e.latlng).addTo(this.map)
            .bindPopup("You are within " + radius.toPrecision(5) + " feet of this point").openPopup();

        L.circle(e.latlng, radius, {fill: false}).addTo(this.map);

        this.showLocation({
          location: {
            raw: {
              formatted_address: 'N/A - From device location',
              geometry: {
                location: {
                  lat: e.latlng.lat,
                  lng: e.latlng.lng
                }
              }
            }
          }
        });
      });

      this.map.on('locationerror', e => {
        alert(e.message);
      });
    }
  },

  initMap() {
    const defaultCenterLat = 41.85;
    const defaultCenterLong = -87.63;
    const defaultZoom = 11;
    this.set('map', L.map('leaflet-map', {
      center: [defaultCenterLat, defaultCenterLong],
      zoom: defaultZoom
    }));

    $('#crimereports-map').attr('src', this.buildCrimeMapUrl(defaultCenterLat, defaultCenterLong, 13));

    Promise.all([
      this.initBaseLayers(),
      this.initGeocoder(),
      this.initInfoBox(),
      this.initLayers(),
      this.addressLookup.loadData()
    ]).then(() => {
      let incidents = this.get('model.incidents');
      if (incidents) {
        incidents.forEach((incident) => {
          get(incident, 'location.layer').addTo(this.overlay['User Features']);
        });
      }

      // wait for everything to load before trying to geocode an address
      if (window.location.hash) {
        let hash = window.location.hash.substr(1),
          query = hash.substr(hash.indexOf('location_query='))
            .split('&')[0]
            .split('=')[1];
        query = decodeURIComponent(query.replace(/\+/g, " "));
        this.actions.searchAddress.bind(this)(query);
      }
    });

    this.initEditableMap();

    L.control.layers(this.baseLayers, this.overlay, {
      collapse: false
    }).addTo(this.map);

    L.streetView({
      position: 'topleft',
      google: true,
      bing: false,
      yandex: false,
      mapillary: false,
      openstreetcam: false,
      mosatlas: false
    }).addTo(this.map);
  },

  initBaseLayers() {
    return new Promise((resolve, reject) => {
      this.baseLayers["OpenStreetMap"] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxNativeZoom: 19,
        minZoom: 0,
        maxZoom: 20
      });

      this.baseLayers["MapBox Streets"] = L.tileLayer('https://api.mapbox.com/styles/v1/erictendian/ciqn6pmjh0005bini99og1s6q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpY3RlbmRpYW4iLCJhIjoiY2lvaXpvcDRnMDBkNHU1bTFvb2R1NjZjYiJ9.3vYfk1y5-F5MVQDdgaXwpA', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 0,
        maxZoom: 20
      });

      this.baseLayers["MapBox Streets Dark"] = L.tileLayer('https://api.mapbox.com/styles/v1/erictendian/cj9ne99zz3e112rp4pxcpua1z/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpY3RlbmRpYW4iLCJhIjoiY2lvaXpvcDRnMDBkNHU1bTFvb2R1NjZjYiJ9.3vYfk1y5-F5MVQDdgaXwpA', {
        attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 0,
        maxZoom: 20
      });

      this.baseLayers["Google Hybrid"] = new L.gridLayer.googleMutant({
        type: 'hybrid',
        minZoom: 0,
        maxZoom: 20
      });

      if (localStorage.getItem('dark')) {
        this.baseLayers["MapBox Streets Dark"].addTo(this.map);
      } else {
        this.baseLayers["MapBox Streets"].addTo(this.map);
      }

      resolve();
    });
  },

  buildCrimeMapUrl(latitude, longitude, zoom = 16) {
    let url = new URL('https://www.cityprotect.com/map/list/incidents');

    let queryParams = {
      fromUpdateDate: moment().subtract('months', 3).format('MM/DD/YYYY'),
      toUpdateDate: moment().format('MM/DD/YYYY'),
      pageSize: 2000,
      parentIncidentTypeIds: '149,150,148,8,97,104,165,98,100,179,178,180,101,99,103,163,168,166,12,161,14,16,15,160,121,162,164,167,173,169,170,172,171,151',
      zoomLevel: zoom,
      latitude: latitude,
      longitude: longitude,
      days: '1,2,3,4,5,6,7',
      startHour: 0,
      endHour: 24,
      timezone: '-06:00'
    };
    url.search = new URLSearchParams(queryParams);

    return url.toString();
  },

  showLocation(event) {
    let query = $('.leaflet-control-geosearch.bar form input').val();
    $('#address-search').find('input[name="address"]').val(query);
    if (window.ga && typeof window.ga === "function") {
      ga('send', 'event', 'Looks up address', 'Tools', query);
    }
    window.location.hash = '#location_query=' + encodeURIComponent(query);
    this.set('location', this.addressLookup.generateLocationDataForAddress(this.layers, event.location.raw));
    let randomInt = Math.round(Math.random() * 1000); // Without this, the iframe would not reload when we change locations
    let wazeIframeUrl = 'https://embed.waze.com/iframe?zoom=15&lat=' + this.location.meta.latitude + '&lon=' + this.location.meta.longitude + '&pin=1&_=' + randomInt;
    $('#waze-map').attr('src', wazeIframeUrl);
    if (this.location.meta.inChicago) {
      let crimereportsIframeUrl = this.buildCrimeMapUrl(this.location.meta.latitude, this.location.meta.longitude);
      $('#crimereports-map').attr('src', crimereportsIframeUrl);

      schedule('afterRender', () => {
        window.$('[data-toggle="tooltip"]').removeAttr('data-original-title').tooltip();
      });
    }
  },

  initGeocoder() {
    return new Promise((resolve, reject) => {
      this.set('geosearchProvider', new GeoSearch.GoogleProvider({
        params: {
          key: 'AIzaSyDrvC1g6VOozblroTwleGRz9SJDN82F_gE',
          bounds: '41.60218817897012,-87.9728821400663|42.05134582102988,-87.37011785993366'
        },
      }));

      const searchControl = new GeoSearch.GeoSearchControl({
        provider: this.geosearchProvider,
        style: 'bar',
        autoComplete: false,
        showPopup: true,
        maxMarkers: 3
      });
      this.set('searchControl', searchControl);

      this.map.addControl(searchControl);

      this.map.on('geosearch/showlocation', this.showLocation);

      resolve();
    });
  },

  initLayers() {
    this.set('layers', {
      fireStations: {
        label: "Fire Stations",
        layer: null,
        url: '/data/city_data/fire_stations.json',
        showByDefault: true
      },
      policeDistricts: {
        label: "Police Districts",
        layer: null,
        url: '/data/map_data/police_districts.geojson',
        showByDefault: true,
        style: {
          fill: true,
          fillOpacity: 0.01,
          color: '#00f',
          weight: 3
        }
      },
      policeBeats: {
        label: "Police Beats",
        layer: null,
        url: '/data/map_data/police_beats.geojson',
        showByDefault: false,
        style: {
          fill: true,
          fillOpacity: 0.05,
          color: '#00f',
          weight: 2
        }
      },
      neighborhoods: {
        label: "Neighborhoods",
        layer: null,
        url: '/data/map_data/neighborhoods.geojson',
        showByDefault: false,
        style: {
          fill: true,
          fillOpacity: 0.05,
          color: '#a00',
          weight: 2
        }
      },
      communityAreas: {
        label: "Community Areas",
        layer: null,
        url: '/data/map_data/community_areas.geojson',
        showByDefault: false,
        style: {
          fill: true,
          fillOpacity: 0.05,
          color: '#333',
          weight: 3
        }
      },
      wards: {
        label: "Wards",
        layer: null,
        url: '/data/map_data/wards.geojson',
        showByDefault: false,
        style: {
          fill: true,
          fillOpacity: 0.05,
          color: '#030',
          weight: 2
        }
      },
      gangs: {
        label: "Gangs (unofficial)",
        layer: null,
        url: 'https://cors-anywhere.herokuapp.com/https://www.google.com/maps/d/kml?forcekml=1&mid=1am7PF0tT25EztnOTAgUEL2E382VjVTc7',
        showByDefault: false
      }
    });

    return this.loadLayerData(this.layers);
  },

  loadLayerData(layers) {
    let map = this.map;
    let info = this.infobox;

    let promises = [];

    for (let layerName in layers) {
      promises.push(new Promise((resolve, reject) => {
        if (layers.hasOwnProperty(layerName)) {
          let layerObj = layers[layerName];

          if (layerName === 'fireStations') {
            let layerGroup = L.markerClusterGroup();
            if (layerObj.showByDefault) {
              layerGroup.addTo(map);
            }
            layerObj.layer = layerGroup;
            this.overlay[layerObj.label] = layerObj.layer;
            fetch(layerObj.url).then((response) => {
              response.json().then((data) => {
                data.forEach((location) => {
                  let markerTitle = location.name ? location.name : [location.engine, location.truck, location.ambo, location.squad].filter(Boolean).join('-');

                  let stationMarker = L.marker([location.latitude, location.longitude], {
                    title: markerTitle,
                    icon: L.AwesomeMarkers.icon({
                      icon: 'fire-extinguisher',
                      prefix: 'fa',
                      markerColor: 'red'
                    })
                  });

                  // Convert address to title case
                  location.addr = location.addr.toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function(m) {
                    return m.toUpperCase();
                  });

                  // this is a really hacky way to make a popup, we should stop doing it
                  // @TODO: Use Handlebars template to make Leaflet popup
                  let popupContents = '<h6>' + markerTitle + '</h6>' +
                    '<strong>' + location.addr + '</strong>' +
                    (location.engine ? '<br><strong>Engine:</strong> ' + location.engine : '') +
                    (location.truck ? '<br><strong>Truck/Tower:</strong> ' + location.truck : '') +
                    (location.ambo ? '<br><strong>Ambulance:</strong> ' + location.ambo : '') +
                    (location.squad ? '<br><strong>Squad:</strong> ' + location.squad : '') +
                    (location.special ? '<br><strong>Special (search radio IDs):</strong> ' + location.special : '') +
                    (location.batt ? '<br><strong>Battalion:</strong> ' + location.batt + ' / <strong>District:</strong> ' + location.fireDist : '') +
                    (location.emsDist ? '<br><strong>EMS District:</strong> ' + location.emsDist : '') +
                    (location.radio ? '<br><strong>Radio Channel:</strong> ' + location.radio : '');
                  stationMarker.bindPopup(popupContents).openPopup();

                  layerGroup.addLayer(stationMarker);
                });
                resolve();
              }).catch((err) => {
                reject(err);
              })
            }).catch((err) => {
              reject(err);
            });
          } else if (layerName === 'gangs') {
            let kmlLayer = new L.KML();
            map.attributionControl.addAttribution('Gang map by <a href="https://np.reddit.com/r/Chiraqology/wiki/index/gangmaps" target="_blank">u/ReggieG45</a>');
            if (layerObj.showByDefault) {
              kmlLayer.addTo(map);
            }
            layerObj.layer = kmlLayer;
            this.overlay[layerObj.label] = layerObj.layer;

            fetch(layerObj.url).then(response => response.text())
              .then(kmltext => {
                // Create new kml overlay
                const parser = new DOMParser();
                const kml = parser.parseFromString(kmltext, 'text/xml');
                layerObj.layer.addKML(kml);
                resolve();
              }).catch((err) => {
                reject(err);
              });
          } else {
            let layerMouseover = (e) => {
              let layer = e.target;

              info.update(layer.feature.properties);
              if (map.getZoom() < 14) {
                layer.setStyle({
                  color: '#ff0',
                  fillOpacity: 0.15
                });
              } else {
                e.target.setStyle(layerObj.style);
              }

              if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
              }
            };

            let geoJsonLayer = L.geoJson(null, {
              onEachFeature: (feature, layer) => {
                layer.on({
                  mouseover: layerMouseover,
                  mouseout: (e) => {
                    e.target.setStyle(layerObj.style);
                    info.update();
                  }
                });
              }
            });
            if (layerObj.showByDefault) {
              geoJsonLayer.addTo(map);
            }
            layerObj.layer = geoJsonLayer;
            this.overlay[layerObj.label] = layerObj.layer;
            fetch(layerObj.url).then((response) => {
              response.json().then((data) => {
                layerObj.layer.addData(data).setStyle(layerObj.style);
                resolve();
              }).catch((err) => {
                reject(err);
              })
            }).catch((err) => {
              reject(err);
            });
          }
        }
      }));
    }

    return Promise.all(promises);
  },

  initInfoBox() {
    const hiddenFeatureProperties = ['shape_len', 'shape_leng', 'shape_area', 'area', 'perimeter', 'comarea_', 'comarea_id', 'area_numbe', 'area_num_1'];
    return new Promise((resolve, reject) => {
      let info = L.control();

      info.onAdd = function () {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
      };

      info.update = function (props) {
        let html = '<h4>Layer Info</h4>';
        for (let key in props) {
          if (hiddenFeatureProperties.indexOf(key) === -1 && props.hasOwnProperty(key)) {
            html += '<p>' + key + ': ' + props[key] + '</p>';
          }
        }
        this._div.innerHTML = html;
      };

      info.addTo(this.map);

      this.set('infobox', info);
      resolve();
    });
  },

  initEditableMap() {
    this.overlay['User Features'] = L.markerClusterGroup()
      .addTo(this.map);

    this.map.addControl(new L.Control.Draw({
      edit: {
        featureGroup: this.overlay['User Features'],
        poly: {
          allowIntersection: false
        }
      },
      draw: {
        polyline: {
          shapeOptions: {
            color: '#00ff00',
            weight: 10
          }
        },
        polygon: {
          showArea: true,
          allowIntersection: false,
          drawError: {
            color: '#da2600', // Color the shape will turn when intersects
            message: '<strong>Error:<strong> Polygon cannot intersect with itself' // Message that will show when intersect
          },
          shapeOptions: {
            color: '#00ff00'
          }
        }
      }
    }));

    let drawEventCreated = (event) => {
      let layer = event.layer;
      // layer.bindPopup('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-incident-modal">Add Incident</button>').openPopup();

      this.overlay['User Features'].addLayer(layer);
    };

    this.map.on(L.Draw.Event.CREATED, drawEventCreated.bind(this));
  }
});
