import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;
const {
  Controller
} = Ember;

export default Controller.extend({
  isSelectingSlot: false,

  actions: {
    chooseSlot(position) {
      const flashMessages = get(this, 'flashMessages');
      const isSelectingSlot = get(this, 'isSelectingSlot');

      if (!isSelectingSlot) {
        return;
      }

      flashMessages.info(`Selected slot position: ${position}`);
      set(this, 'isSelectingSlot', false);
    }
  }
});
