import Ember from 'ember';
import Route from '../basic/route';

const {
  get: get
} = Ember;

export default Route.extend({
  breadCrumb: {
    title: 'Home',
    iconName: 'avatar'
  },

  model() {
    return this.store.find('page');
  },

  actions: {
    removePage(id = null) {
      const flashMessages = get(this, 'flashMessages');

      this.store.findById('page', id)
      .then((page) => {
        page.destroyRecord();
      })
      .then(() => {
        flashMessages.success('Page removed successfully');
      })
      .catch((error) => {
        flashMessages.danger(error);
      });
    }
  }
});
