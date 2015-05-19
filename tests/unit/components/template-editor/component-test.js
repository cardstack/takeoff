import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('template-editor', 'Unit | Component | template editor', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: [ 'template:page-template-0' ]
});

test('it renders the right layout', function(assert) {
  assert.expect(1);

  const component = this.subject({
    templateId: 0
  });

  this.render();

  assert.equal(component.get('layoutName'), 'page-template-0');
});
