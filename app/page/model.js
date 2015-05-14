import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({
  templateId: attr('number'),
  title: attr('string'),
  imageUrl: attr('string'),
  cards: hasMany('card', { polymorphic: true })
});
