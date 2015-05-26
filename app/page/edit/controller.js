import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;
const {
  Controller,
  setProperties
} = Ember;

export default Controller.extend({
  isShowingModal: false,
  isSelectingSlot: false,
  selectedCard: null,
  editedCard: null,

  actions: {
    chooseSlot(position) {
      const isSelectingSlot = get(this, 'isSelectingSlot');
      const selectedCard = get(this, 'selectedCard');

      if (!isSelectingSlot || !selectedCard) {
        return;
      }

      const flashMessages = get(this, 'flashMessages');
      const currentPage = get(this, 'model');
      set(selectedCard, 'position', position);

      const newCard = this.store.createRecord('card', selectedCard);

      newCard.set('page', currentPage);
      newCard.save().then(() => {
        flashMessages.success(`Added ${name} to slot ${position}`);
      })
      .catch(() => {
        flashMessages.danger('Something went wrong!');
      }).finally(() => {
        this.resetEditor();
      });
    },

    editCard(card) {
      setProperties(this, {
        isShowingModal: true,
        editedCard: card
      });
    },

    closeModal() {
      set(this, 'isShowingModal', false);
    }
  },

  resetEditor() {
    setProperties(this, {
      isSelectingSlot: false,
      selectedCard: null
    });
  }
});
