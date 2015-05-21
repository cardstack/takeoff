import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  beforeModel() {
    // https://github.com/emberjs/ember.js/issues/11152
    this.transitionTo('page.index');
  }
});
