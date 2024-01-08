import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.shfyovshofyshv.caption'),
          title: i18n.t('forms.application.sitemap.shfyovshofyshv.title'),
          children: [{
            link: 'i-i-s-shfyovshofyshv-пациент-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-пациент-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-пациент-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-тапочки-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-тапочки-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-тапочки-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-адрес-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-адрес-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-запись-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-запись-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-сланцы-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-сланцы-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-сланцы-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-сотрудник-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-категория-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-категория-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-категория-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-shfyovshofyshv-должность-l',
            caption: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.shfyovshofyshv.i-i-s-shfyovshofyshv-должность-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})