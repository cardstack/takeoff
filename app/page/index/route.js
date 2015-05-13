import Ember from 'ember';
import Route from '../../basic/route';

export default Route.extend({
  model() {
    return [
      {
        id: 0,
        title: 'The Mutants Are Revolting',
        downloadUrl: 'http://www.example.com',
        publicUrl: 'http://www.example.com',
        imageUrl: 'http://www.placecage.com/c/300/350'
      },
      {
        id: 1,
        title: 'A Taste of Freedom',
        downloadUrl: 'http://www.example.com',
        publicUrl: 'http://www.example.com',
        imageUrl: 'http://www.placecage.com/g/300/350'
      },
      {
        id: 2,
        title: 'How Hermes Requisitioned His Groove Back',
        downloadUrl: 'http://www.example.com',
        publicUrl: 'http://www.example.com',
        imageUrl: 'http://www.placecage.com/300/350'
      }
    ];
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
