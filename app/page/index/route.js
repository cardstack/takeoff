import Ember from 'ember';
import Route from '../../basic/route';

export default Route.extend({
  model() {
    return [0, 1, 2, 3];
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
