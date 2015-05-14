import Ember from 'ember';

const {
  get: get,
  computed
} = Ember;

export default Ember.Component.extend({
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
