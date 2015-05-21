import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;
const {
  Controller
} = Ember;

export default Controller.extend({
  isSelectingSlot: false,
  selectedCard: null,

  actions: {
    chooseSlot(position) {
      const flashMessages = get(this, 'flashMessages');
      const isSelectingSlot = get(this, 'isSelectingSlot');
      const selectedCard = get(this, 'selectedCard');
      const currentPage = get(this, 'model');
      const {
        name,
        type
      } = selectedCard;

      if (!isSelectingSlot || !selectedCard) {
        return;
      }

      const newCard = this.store.createRecord('card', {
        position,
        name,
        type
      });

      newCard.set('page', currentPage);
      newCard.save().then(() => {
        flashMessages.successe(`Added ${name} to slot ${position}`);
      })
      .catch(() => {
        flashMessages.danger('Something went wrong!');
      }).finally(() => {
        set(this, 'isSelectingSlot', false);
      });
    }
  }
});
