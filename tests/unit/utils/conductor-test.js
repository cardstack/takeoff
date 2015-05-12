import Ember from 'ember';
import Conductor from 'conductor';
import { module, test } from 'qunit';

const { keys } = Ember;

module('Conductor');

// Replace this with your real tests.
test('it has Conductor defined', function(assert) {
  const result = new Conductor();
  const conductorKeys = keys(result);
  const hasOasis = conductorKeys.contains('oasis');

  assert.ok(hasOasis);
});
