import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: [ 'templateSlot' ],
  classNameBindings: [ 'hasCard:has-card' ],
  hasCard: computed.bool('card'),

  click() {
    const position = get(this, 'position');
    const card = get(this, 'card');

    if (card) {
      this.sendAction('editCard', card);
    } else {
      this.sendAction('sendPosition', position);
    }
  }
});
