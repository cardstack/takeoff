import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',

  actions: {
    toggleVisibility(index) {
      this.sendAction('toggleVisibility', index);
    }
  }
});
