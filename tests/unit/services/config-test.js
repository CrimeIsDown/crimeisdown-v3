import { module, test } from 'qunit';
import { setupTest } from 'crimeisdown/tests/helpers';

module('Unit | Service | config', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:config');
    assert.ok(service);
  });
});
