import styleSet from '../../../utils/style-set';
import { module, test } from 'qunit';

module('Unit | Utility | style set');

// Replace this with your real tests.
test('it transforms a POJO into an inline style string', function(assert) {
  const safeStyleString = styleSet({
    color: '#FFFFFF',
    margin: '10px',
    'line-height': '1em'
  });

  const result = safeStyleString.toString();

  assert.equal(result, 'color:#FFFFFF;margin:10px;line-height:1em;');
});
