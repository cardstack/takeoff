import Ember from 'ember';

const {
  get: get,
  set: set,
  computed
} = Ember;

export default Ember.Route.extend({
  breadCrumb: null,

  afterModel(model) {
    const title = model.get('title');

    set(this, 'breadCrumb', {
      title,
      iconName: 'url-black'
    });
  }
});
