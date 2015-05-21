import Ember from 'ember';

const get = Ember.get;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: [ 'sideBar__cardItem' ],
  classNameBindings: [ 'isSelectingSlot:is-selecting-slot' ],
  isSelectingSlot: false,

  click() {
    this.send('itemClick');
  },

  actions: {
    itemClick() {
      this.toggleProperty('isSelectingSlot');
      this.sendAction('handleClick', get(this, 'isSelectingSlot'));
    },

    confirm() {
      const item = get(this, 'item');
      this.sendAction('confirmClick', item);
    }
  }
});
