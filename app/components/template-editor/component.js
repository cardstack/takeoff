import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

export default Component.extend({
  layoutName: computed('templateId', {
    get() {
      const templateId = get(this, 'templateId');

      return `page-template-${templateId}`;
    }
  })
});
