import Ember from 'ember';

const get = Ember.get;

const {
  Handlebars,
  computed
} = Ember;

const {
  escapeExpression
} = Handlebars.Utils;

const {
  htmlSafe
} = Ember.String;

export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: [ 'viewBox', 'width', 'height' ],

  href: computed('src', 'anchor', {
    get() {
      const src = get(this, 'src');
      const anchor = get(this, 'anchor');
      const escapedHref = escapeExpression(`${src}#${anchor}`);

      return htmlSafe(escapedHref);
    }
  })
});
