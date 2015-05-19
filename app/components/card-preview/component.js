import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

const { htmlSafe } = Ember.String;

export default Component.extend({
  classNames: [ 'previewCard' ],
  attributeBindings: [ 'style' ],

  style: computed('card.imageUrl', {
    get() {
      const imageUrl = get(this, 'card.imageUrl');
      const safeImageUrl = htmlSafe(`background: url('${imageUrl}')`);

      return safeImageUrl;
    }
  }),

  actions: {
    remove(id) {
      this.sendAction('remove', id);
    }
  }
});
