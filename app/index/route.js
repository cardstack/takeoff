import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // https://github.com/emberjs/ember.js/issues/11152
    this.transitionTo('page.index');
  }
});
