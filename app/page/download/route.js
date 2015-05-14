import Ember from 'ember';

const {
  set: set
} = Ember;

export default Ember.Route.extend({
  breadCrumb: null,

  afterModel(model) {
    const title = `Downloading: ${model.get('title')}`;

    set(this, 'breadCrumb', {
      title,
      iconName: 'download-black'
    });
  }
});
