import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shfyovshofyshv-запись', 'Unit | Model | i-i-s-shfyovshofyshv-запись', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-shfyovshofyshv-адрес',
    'model:i-i-s-shfyovshofyshv-должность',
    'model:i-i-s-shfyovshofyshv-заказ-сланцев',
    'model:i-i-s-shfyovshofyshv-заказ-тапочек',
    'model:i-i-s-shfyovshofyshv-запись',
    'model:i-i-s-shfyovshofyshv-категория',
    'model:i-i-s-shfyovshofyshv-пациент',
    'model:i-i-s-shfyovshofyshv-сланцы',
    'model:i-i-s-shfyovshofyshv-сотрудник',
    'model:i-i-s-shfyovshofyshv-тапочки',
    'model:i-i-s-shfyovshofyshv-хар-сланцев',
    'model:i-i-s-shfyovshofyshv-хар-тапочек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
