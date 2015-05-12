import Ember from 'ember';

const {
  Component,
  computed,
  get: get
} = Ember;

export default Component.extend({
  tagName: 'span',

  iconPath: computed('iconName', {
    get() {
      const iconName = get(this, 'iconName');

      return `assets/images/icon-${iconName}.svg`;
    }
  })
});
