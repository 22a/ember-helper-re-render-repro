import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<MyComponent />`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('it doesn\'t blow up when clicking on an inline svg', async function(assert) {
    await render(hbs`<MyComponent />`);
    // this spec actually appears to always pass, but if I pauseTest and click
    // the svg myself it throws - you'll have to trust me ¯\_(ツ)_/¯
    await click('svg');
    assert.ok(true);
  });
});
