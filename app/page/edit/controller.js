import Ember from 'ember';

const get = Ember.get;
const {
  Controller,
  setProperties
} = Ember;

export default Controller.extend({
  isSelectingSlot: false,
  selectedCard: null,

  actions: {
    chooseSlot(position) {
      const isSelectingSlot = get(this, 'isSelectingSlot');
      const selectedCard = get(this, 'selectedCard');

      if (!isSelectingSlot || !selectedCard) {
        return;
      }

      const flashMessages = get(this, 'flashMessages');
      const currentPage = get(this, 'model');
      const {
        name,
        type
      } = selectedCard;

      const newCard = this.store.createRecord('card', {
        position,
        name,
        type
      });

      newCard.set('page', currentPage);
      newCard.save().then(() => {
        flashMessages.success(`Added ${name} to slot ${position}`);
      })
      .catch(() => {
        flashMessages.danger('Something went wrong!');
      }).finally(() => {
        setProperties(this, {
          isSelectingSlot: false,
          selectedCard: null
        });
      });
    }
  }
});
