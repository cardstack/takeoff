import DS from 'ember-data';

const {
  Model,
  belongsTo
} = DS;

export default Model.extend({
  page: belongsTo('page', { polymorphic: true })
});
