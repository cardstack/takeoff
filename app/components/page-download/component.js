import Ember from 'ember';

const get = Ember.get;
const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tarball: computed('pageId', {
    get() {
      const pageId = get(this, 'pageId');

      return `${pageId}.tar.gz`;
    }
  }),

  tarballUrl: computed('pageId', {
    get() {
      const pageId = get(this, 'pageId');

      return `/tarball/${pageId}.tar.gz`;
    }
  })
});
