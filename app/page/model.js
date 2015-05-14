import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  templateId: attr('number'),
  title: attr('string'),
  imageUrl: attr('string')
});
