import Ember from 'ember';
import Route from '../../basic/route';
import UUID from 'UUID';

const {
  get: get,
  set: set
} = Ember;

export default Route.extend({
  actions: {
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    },

    closeModal() {
      this.controller.set('isShowingModal', false);
    },

    removePage(id = null) {
      const flashMessages = get(this, 'flashMessages');
      const model = get(this, 'currentModel');
      const page = model.findBy('id', id);
      page.deleteRecord();
      model.removeObject(page);
      flashMessages.success('Page removed successfully');
    },

    createPage(templateId) {
      const flashMessages = get(this, 'flashMessages');
      const page = this.store.createRecord('page', {
        templateId,
        id: UUID.generate(),
        title: 'Untitled page',
        imageUrl: 'http://www.placecage.com/c/300/350'
      });

      flashMessages.success('Created new page');
      this.send('closeModal');
    }
  }
});
