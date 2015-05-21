import Ember from 'ember';

const get = Ember.get;
const {
  Component
} = Ember;

export default Component.extend({
  classNames: [ 'templateSlot' ],

  click() {
    const position = get(this, 'position');
    this.sendAction('sendPosition', position);
  }
});
