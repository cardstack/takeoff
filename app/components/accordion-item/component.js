import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  tagName: 'li',
  classNames: [ 'sideBar__cardItem' ],

  click() {
    this.send('itemClick');
  },

  actions: {
    itemClick() {
      this.sendAction('handleClick');
    }
  }
});
