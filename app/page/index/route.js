import Ember from 'ember';
import Route from '../../basic/route';
import UUID from 'UUID';

const get = Ember.get;
const set = Ember.set;
const {
  inject
} = Ember;

export default Route.extend({
  sidebarManager: inject.service(),

  beforeModel() {
    const sidebarManager = get(this, 'sidebarManager');
    set(sidebarManager, 'currentSideBar', 'instructions-side-bar');
  },

  breadCrumb: {
    title: 'Home',
    iconName: 'avatar'
  },

  actions: {
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    },

    closeModal() {
      this.controller.set('isShowingModal', false);
    },

    createPage(templateId) {
      const flashMessages = get(this, 'flashMessages');
      const page = this.store.createRecord('page', {
        templateId,
        id: UUID.generate(),
        title: 'Untitled page',
        imageUrl: `/assets/images/template-${templateId}.svg`
      });

      page.save().then(() => {
        flashMessages.success('Created new page');
      }).catch(() => {
        flashMessages.danger('Something went wrong!');
      }).finally(() => {
        this.send('closeModal');
      });
    }
  }
});
