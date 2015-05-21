import Ember from 'ember';
import Route from '../../basic/route';

const set = Ember.set;

export default Route.extend({
  breadCrumb: null,

  afterModel(model) {
    const title = `Downloading: ${model.get('title')}`;

    set(this, 'breadCrumb', {
      title,
      iconName: 'download-black'
    });
  }
});
