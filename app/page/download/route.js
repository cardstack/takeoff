import Ember from 'ember';

const {
  get: get,
  computed
} = Ember;

export default Ember.Route.extend({
  breadCrumb: computed('currentModel.title', {
    get() {
      const title = get(this, 'currentModel.title');

      return {
        title,
        iconName: 'download-black'
      };
    }
  })
});
