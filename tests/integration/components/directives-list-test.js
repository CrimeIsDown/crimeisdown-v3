import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | directives list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{directives-list}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#directives-list}}
        template block text
      {{/directives-list}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
