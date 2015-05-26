import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;
const {
  EnumerableUtils,
  Component,
  computed,
  on
} = Ember;

const {
  forEach
} = EnumerableUtils;

export default Component.extend({
  classNames: [ 'templateEdit' ],
  classNameBindings: [ 'isSelectingSlot:is-selecting-slot' ],

  layoutName: computed('templateId', {
    get() {
      const templateId = get(this, 'templateId');

      return `page-template-${templateId}`;
    }
  }),

  mapSlots: on('didReceiveAttrs', function() {
    const cards = get(this, 'page.cards');

    forEach(cards, (card) => {
      const position = get(card, 'position');
      const slotPosition = `slot${position}`;
      set(this, slotPosition, card);
    });
  }),

  actions: {
    sendPosition(position) {
      this.sendAction('sendPosition', position);
    },

    editCard(card) {
      this.sendAction('editCard', card);
    }
  }
});
