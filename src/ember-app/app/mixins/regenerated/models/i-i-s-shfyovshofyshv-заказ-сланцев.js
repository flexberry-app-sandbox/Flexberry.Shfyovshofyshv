import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сланцы: DS.belongsTo('i-i-s-shfyovshofyshv-сланцы', { inverse: null, async: false }),
  запись: DS.belongsTo('i-i-s-shfyovshofyshv-запись', { inverse: 'заказСланцев', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-сланцев.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сланцы: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-сланцев.validations.сланцы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-заказ-сланцев.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказСланцевE', 'i-i-s-shfyovshofyshv-заказ-сланцев', {
    комментарий: attr('Комментарий', { index: 0 })
  });
};
