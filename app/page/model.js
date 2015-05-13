import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  templateId: attr('number'),
  title: attr('string'),
  downloadUrl: attr('string'),
  publicUrl: attr('string'),
  imageUrl: attr('string')
});
