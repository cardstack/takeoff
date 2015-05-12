import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  isShowingModal: false,
  actions: {
    toggleModal(){
      this.toggleProperty('isShowingModal');
    }
  }
});
