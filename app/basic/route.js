import Ember from 'ember';

const {
  $,
  get: get
} = Ember;

export default Ember.Route.extend({
  activate() {
    const routeName = get(this, 'routeName');
    const routeNameBEM = routeName.replace('.', '__');
    $('body').attr('id', routeNameBEM);
  },

  deactivate() {
    $('body').attr('id', null);
  }
});
