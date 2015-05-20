import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: [ 'templateEdit' ],
  classNameBindings: [ 'isSelectingSlot:is-selecting-slot' ],
  layoutName: computed('templateId', {
    get() {
      const templateId = get(this, 'templateId');

      return `page-template-${templateId}`;
    }
  }),

  actions: {
    sendPosition(position) {
      this.sendAction('sendPosition', position);
    }
  }
});
