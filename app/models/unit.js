import Model, { belongsTo, attr } from '@ember-data/model';

export default Model.extend({
  agency: belongsTo('agency'),
  radioId: attr('string')
});
