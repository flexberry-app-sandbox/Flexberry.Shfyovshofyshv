import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shfyovshofyshv-сотрудник', 'Unit | Serializer | i-i-s-shfyovshofyshv-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-shfyovshofyshv-сотрудник',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-shfyovshofyshv-тип-оплаты',
    'transform:i-i-s-shfyovshofyshv-тип-получения',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
