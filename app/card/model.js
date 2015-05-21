import DS from 'ember-data';
import Slot from '../slot/model';

const {
  attr
} = DS;

export default Slot.extend({
  type: attr('string'),
  name: attr('string'),
  position: attr('number'),
  options: attr('object')
});
