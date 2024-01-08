import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типОплаты: DS.attr('i-i-s-shfyovshofyshv-тип-оплаты'),
  адрес: DS.belongsTo('i-i-s-shfyovshofyshv-адрес', { inverse: null, async: false }),
  пациент: DS.belongsTo('i-i-s-shfyovshofyshv-пациент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-shfyovshofyshv-сотрудник', { inverse: null, async: false }),
  заказТапочек: DS.hasMany('i-i-s-shfyovshofyshv-заказ-тапочек', { inverse: 'запись', async: false }),
  заказСланцев: DS.hasMany('i-i-s-shfyovshofyshv-заказ-сланцев', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пациент: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.пациент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказТапочек: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.заказТапочек.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказСланцев: {
    descriptionKey: 'models.i-i-s-shfyovshofyshv-запись.validations.заказСланцев.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-shfyovshofyshv-запись', {
    дата: attr('Дата', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    комментарий: attr('Комментарий', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    заказТапочек: hasMany('i-i-s-shfyovshofyshv-заказ-тапочек', 'Заказ тапочек', {
      
    }),
    заказСланцев: hasMany('i-i-s-shfyovshofyshv-заказ-сланцев', 'Заказ сланцев', {
      
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-shfyovshofyshv-запись', {
    дата: attr('Дата', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    комментарий: attr('Комментарий', { index: 2 }),
    сумма: attr('Сумма', { index: 3 })
  });

  modelClass.defineProjection('ЗаписьE', 'i-i-s-shfyovshofyshv-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    время: attr('Время', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    пациент: belongsTo('i-i-s-shfyovshofyshv-пациент', 'Пациент', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-shfyovshofyshv-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фамилия' }),
    адрес: belongsTo('i-i-s-shfyovshofyshv-адрес', 'Адрес', {
      город: attr('Город', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'город' }),
    заказТапочек: hasMany('i-i-s-shfyovshofyshv-заказ-тапочек', 'Заказ тапочек', {
      
    }),
    заказСланцев: hasMany('i-i-s-shfyovshofyshv-заказ-сланцев', 'Заказ сланцев', {
      
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-shfyovshofyshv-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    время: attr('Время', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    сумма: attr('Сумма', { index: 5 }),
    пациент: belongsTo('i-i-s-shfyovshofyshv-пациент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 6 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-shfyovshofyshv-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true }),
    адрес: belongsTo('i-i-s-shfyovshofyshv-адрес', 'Город', {
      город: attr('Город', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
