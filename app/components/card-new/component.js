import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'newCard' ],

  click: function() {
    this.sendAction('create');
  }
});
