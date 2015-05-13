import Ember from 'ember';
import Route from '../../basic/route';
import UUID from 'UUID';

const {
  get: get
} = Ember;

export default Route.extend({
  actions: {
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    },

    closeModal() {
      this.controller.set('isShowingModal', false);
    },

    createPage(templateId) {
      const flashMessages = get(this, 'flashMessages');
      this.store.createRecord('page', {
        templateId,
        id: UUID.generate(),
        title: 'Untitled page',
        imageUrl: `/assets/images/template-${templateId}.svg`
      });

      flashMessages.success('Created new page');
      this.send('closeModal');
    }
  }
});
