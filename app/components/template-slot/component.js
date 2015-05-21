import Ember from 'ember';

const get = Ember.get;

export default Ember.Component.extend({
  classNames: [ 'templateSlot' ],

  click() {
    const position = get(this, 'position');
    this.sendAction('sendPosition', position);
  }
});
