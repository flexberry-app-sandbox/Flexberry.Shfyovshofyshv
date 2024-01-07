import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  тапочки: DS.belongsTo('i-i-s-shfyovshofyshv-тапочки', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-shfyovshofyshv-запись', { inverse: 'заказТапочек', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-тапочек.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тапочки: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-тапочек.validations.тапочки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-тапочек.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказТапочекE', 'i-i-s-shfyovshofyshv-заказ-тапочек', {
    комментарий: attr('Комментарий', { index: 0 })
  });
};
