import Ember from 'ember';
import DS from 'ember-data';

const {
  Transform
} = DS;
const {
  $
} = Ember;

export default Transform.extend({
  deserialize(value) {
    if (!$.isPlainObject(value)) {
      return {};
    } else {
      return value;
    }
  },

  serialize(value) {
    if (!$.isPlainObject(value)) {
      return {};
    } else {
      return value;
    }
  }
});
