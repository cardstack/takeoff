import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'span',

  iconClass: computed('iconName', {
    get() {
      const iconName = get(this, 'iconName');

      return `icon icon-${iconName}`;
    }
  }),

  iconPath: computed('iconName', {
    get() {
      const iconName = get(this, 'iconName');

      return `assets/images/icon-${iconName}.svg`;
    }
  })
});
