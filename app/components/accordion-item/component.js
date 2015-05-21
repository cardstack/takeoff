import Ember from 'ember';

const get = Ember.get;
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
      const item = get(this, 'item');
      this.sendAction('handleClick', item);
    }
  }
});
