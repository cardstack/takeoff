import Ember from 'ember';
import Route from '../../basic/route';

export default Route.extend({
  model() {
    const fakePage1 = this.store.createRecord('page', {
      templateId: 0,
      title: 'The Mutants Are Revolting',
      downloadUrl: 'http://www.example.com',
      publicUrl: 'http://www.example.com',
      imageUrl: 'http://www.placecage.com/c/300/350'
    });
    const fakePage2 = this.store.createRecord('page', {
      templateId: 1,
      title: 'A Taste of Freedom',
      downloadUrl: 'http://www.example.com',
      publicUrl: 'http://www.example.com',
      imageUrl: 'http://www.placecage.com/g/300/350'
    });
    const fakePage3 = this.store.createRecord('page', {
      templateId: 0,
      title: 'How Hermes Requisitioned His Groove Back',
      downloadUrl: 'http://www.example.com',
      publicUrl: 'http://www.example.com',
      imageUrl: 'http://www.placecage.com/300/350'
    });

    return [ fakePage1, fakePage2, fakePage3 ];
  },

  actions: {
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    },

    closeModal() {
      this.controller.set('isShowingModal', false);
    }
  }
});
