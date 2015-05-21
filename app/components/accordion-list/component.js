import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'ul',

  actions: {
    toggleVisibility(index) {
      this.sendAction('toggleVisibility', index);
    }
  }
});
