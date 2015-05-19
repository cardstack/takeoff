import Ember from 'ember';

const {
  Handlebars,
  EnumerableUtils,
  keys: objectKeys
} = Ember;

const {
  map
} = EnumerableUtils;

const {
  escapeExpression
} = Handlebars.Utils;

const {
  htmlSafe
} = Ember.String;

export default function styleSet(options = {}) {
  const styles = map(objectKeys(options), (key) => {
    return `${key}:${options[key]};`;
  });

  const stylesString = escapeExpression(styles.join(''));

  return htmlSafe(stylesString);
}
