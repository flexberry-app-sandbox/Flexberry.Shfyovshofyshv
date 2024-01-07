import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISShfyovshofyshvАдресLForm from './forms/i-i-s-shfyovshofyshv-адрес-l';
import IISShfyovshofyshvДолжностьLForm from './forms/i-i-s-shfyovshofyshv-должность-l';
import IISShfyovshofyshvЗаписьLForm from './forms/i-i-s-shfyovshofyshv-запись-l';
import IISShfyovshofyshvКатегорияLForm from './forms/i-i-s-shfyovshofyshv-категория-l';
import IISShfyovshofyshvПациентLForm from './forms/i-i-s-shfyovshofyshv-пациент-l';
import IISShfyovshofyshvСланцыLForm from './forms/i-i-s-shfyovshofyshv-сланцы-l';
import IISShfyovshofyshvСотрудникLForm from './forms/i-i-s-shfyovshofyshv-сотрудник-l';
import IISShfyovshofyshvТапочкиLForm from './forms/i-i-s-shfyovshofyshv-тапочки-l';
import IISShfyovshofyshvАдресEForm from './forms/i-i-s-shfyovshofyshv-адрес-e';
import IISShfyovshofyshvДолжностьEForm from './forms/i-i-s-shfyovshofyshv-должность-e';
import IISShfyovshofyshvЗаписьEForm from './forms/i-i-s-shfyovshofyshv-запись-e';
import IISShfyovshofyshvКатегорияEForm from './forms/i-i-s-shfyovshofyshv-категория-e';
import IISShfyovshofyshvПациентEForm from './forms/i-i-s-shfyovshofyshv-пациент-e';
import IISShfyovshofyshvСланцыEForm from './forms/i-i-s-shfyovshofyshv-сланцы-e';
import IISShfyovshofyshvСотрудникEForm from './forms/i-i-s-shfyovshofyshv-сотрудник-e';
import IISShfyovshofyshvТапочкиEForm from './forms/i-i-s-shfyovshofyshv-тапочки-e';
import IISShfyovshofyshvАдресModel from './models/i-i-s-shfyovshofyshv-адрес';
import IISShfyovshofyshvДолжностьModel from './models/i-i-s-shfyovshofyshv-должность';
import IISShfyovshofyshvЗаказСланцевModel from './models/i-i-s-shfyovshofyshv-заказ-сланцев';
import IISShfyovshofyshvЗаказТапочекModel from './models/i-i-s-shfyovshofyshv-заказ-тапочек';
import IISShfyovshofyshvЗаписьModel from './models/i-i-s-shfyovshofyshv-запись';
import IISShfyovshofyshvКатегорияModel from './models/i-i-s-shfyovshofyshv-категория';
import IISShfyovshofyshvПациентModel from './models/i-i-s-shfyovshofyshv-пациент';
import IISShfyovshofyshvСланцыModel from './models/i-i-s-shfyovshofyshv-сланцы';
import IISShfyovshofyshvСотрудникModel from './models/i-i-s-shfyovshofyshv-сотрудник';
import IISShfyovshofyshvТапочкиModel from './models/i-i-s-shfyovshofyshv-тапочки';
import IISShfyovshofyshvХарСланцевModel from './models/i-i-s-shfyovshofyshv-хар-сланцев';
import IISShfyovshofyshvХарТапочекModel from './models/i-i-s-shfyovshofyshv-хар-тапочек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-shfyovshofyshv-адрес': IISShfyovshofyshvАдресModel,
    'i-i-s-shfyovshofyshv-должность': IISShfyovshofyshvДолжностьModel,
    'i-i-s-shfyovshofyshv-заказ-сланцев': IISShfyovshofyshvЗаказСланцевModel,
    'i-i-s-shfyovshofyshv-заказ-тапочек': IISShfyovshofyshvЗаказТапочекModel,
    'i-i-s-shfyovshofyshv-запись': IISShfyovshofyshvЗаписьModel,
    'i-i-s-shfyovshofyshv-категория': IISShfyovshofyshvКатегорияModel,
    'i-i-s-shfyovshofyshv-пациент': IISShfyovshofyshvПациентModel,
    'i-i-s-shfyovshofyshv-сланцы': IISShfyovshofyshvСланцыModel,
    'i-i-s-shfyovshofyshv-сотрудник': IISShfyovshofyshvСотрудникModel,
    'i-i-s-shfyovshofyshv-тапочки': IISShfyovshofyshvТапочкиModel,
    'i-i-s-shfyovshofyshv-хар-сланцев': IISShfyovshofyshvХарСланцевModel,
    'i-i-s-shfyovshofyshv-хар-тапочек': IISShfyovshofyshvХарТапочекModel
  },

  'application-name': 'Shfyovshofyshv',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Shfyovshofyshv',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Shfyovshofyshv',
          title: 'Shfyovshofyshv'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        shfyovshofyshv: {
          caption: 'Shfyovshofyshv',
          title: 'Shfyovshofyshv',
          'i-i-s-shfyovshofyshv-пациент-l': {
            caption: 'Пациент',
            title: ''
          },
          'i-i-s-shfyovshofyshv-тапочки-l': {
            caption: 'Тапочки',
            title: ''
          },
          'i-i-s-shfyovshofyshv-адрес-l': {
            caption: 'Адрес',
            title: ''
          },
          'i-i-s-shfyovshofyshv-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-shfyovshofyshv-сланцы-l': {
            caption: 'Сланцы',
            title: ''
          },
          'i-i-s-shfyovshofyshv-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-shfyovshofyshv-категория-l': {
            caption: 'Категория',
            title: ''
          },
          'i-i-s-shfyovshofyshv-должность-l': {
            caption: 'Должность',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-shfyovshofyshv-адрес-l': IISShfyovshofyshvАдресLForm,
    'i-i-s-shfyovshofyshv-должность-l': IISShfyovshofyshvДолжностьLForm,
    'i-i-s-shfyovshofyshv-запись-l': IISShfyovshofyshvЗаписьLForm,
    'i-i-s-shfyovshofyshv-категория-l': IISShfyovshofyshvКатегорияLForm,
    'i-i-s-shfyovshofyshv-пациент-l': IISShfyovshofyshvПациентLForm,
    'i-i-s-shfyovshofyshv-сланцы-l': IISShfyovshofyshvСланцыLForm,
    'i-i-s-shfyovshofyshv-сотрудник-l': IISShfyovshofyshvСотрудникLForm,
    'i-i-s-shfyovshofyshv-тапочки-l': IISShfyovshofyshvТапочкиLForm,
    'i-i-s-shfyovshofyshv-адрес-e': IISShfyovshofyshvАдресEForm,
    'i-i-s-shfyovshofyshv-должность-e': IISShfyovshofyshvДолжностьEForm,
    'i-i-s-shfyovshofyshv-запись-e': IISShfyovshofyshvЗаписьEForm,
    'i-i-s-shfyovshofyshv-категория-e': IISShfyovshofyshvКатегорияEForm,
    'i-i-s-shfyovshofyshv-пациент-e': IISShfyovshofyshvПациентEForm,
    'i-i-s-shfyovshofyshv-сланцы-e': IISShfyovshofyshvСланцыEForm,
    'i-i-s-shfyovshofyshv-сотрудник-e': IISShfyovshofyshvСотрудникEForm,
    'i-i-s-shfyovshofyshv-тапочки-e': IISShfyovshofyshvТапочкиEForm
  },

});

export default translations;
