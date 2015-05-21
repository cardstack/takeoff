import Ember from 'ember';

const get = Ember.get;
const {
  Route,
  $
} = Ember;

export default Route.extend({
  activate() {
    const routeName = get(this, 'routeName');
    const routeNameBEM = routeName.replace('.', '__');
    $('body').attr('id', routeNameBEM);
  },

  deactivate() {
    $('body').attr('id', null);
  }
});
