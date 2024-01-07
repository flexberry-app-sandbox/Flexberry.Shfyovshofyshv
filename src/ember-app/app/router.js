import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-shfyovshofyshv-адрес-l');
  this.route('i-i-s-shfyovshofyshv-адрес-e',
  { path: 'i-i-s-shfyovshofyshv-адрес-e/:id' });
  this.route('i-i-s-shfyovshofyshv-адрес-e.new',
  { path: 'i-i-s-shfyovshofyshv-адрес-e/new' });
  this.route('i-i-s-shfyovshofyshv-должность-l');
  this.route('i-i-s-shfyovshofyshv-должность-e',
  { path: 'i-i-s-shfyovshofyshv-должность-e/:id' });
  this.route('i-i-s-shfyovshofyshv-должность-e.new',
  { path: 'i-i-s-shfyovshofyshv-должность-e/new' });
  this.route('i-i-s-shfyovshofyshv-запись-l');
  this.route('i-i-s-shfyovshofyshv-запись-e',
  { path: 'i-i-s-shfyovshofyshv-запись-e/:id' });
  this.route('i-i-s-shfyovshofyshv-запись-e.new',
  { path: 'i-i-s-shfyovshofyshv-запись-e/new' });
  this.route('i-i-s-shfyovshofyshv-категория-l');
  this.route('i-i-s-shfyovshofyshv-категория-e',
  { path: 'i-i-s-shfyovshofyshv-категория-e/:id' });
  this.route('i-i-s-shfyovshofyshv-категория-e.new',
  { path: 'i-i-s-shfyovshofyshv-категория-e/new' });
  this.route('i-i-s-shfyovshofyshv-пациент-l');
  this.route('i-i-s-shfyovshofyshv-пациент-e',
  { path: 'i-i-s-shfyovshofyshv-пациент-e/:id' });
  this.route('i-i-s-shfyovshofyshv-пациент-e.new',
  { path: 'i-i-s-shfyovshofyshv-пациент-e/new' });
  this.route('i-i-s-shfyovshofyshv-сланцы-l');
  this.route('i-i-s-shfyovshofyshv-сланцы-e',
  { path: 'i-i-s-shfyovshofyshv-сланцы-e/:id' });
  this.route('i-i-s-shfyovshofyshv-сланцы-e.new',
  { path: 'i-i-s-shfyovshofyshv-сланцы-e/new' });
  this.route('i-i-s-shfyovshofyshv-сотрудник-l');
  this.route('i-i-s-shfyovshofyshv-сотрудник-e',
  { path: 'i-i-s-shfyovshofyshv-сотрудник-e/:id' });
  this.route('i-i-s-shfyovshofyshv-сотрудник-e.new',
  { path: 'i-i-s-shfyovshofyshv-сотрудник-e/new' });
  this.route('i-i-s-shfyovshofyshv-тапочки-l');
  this.route('i-i-s-shfyovshofyshv-тапочки-e',
  { path: 'i-i-s-shfyovshofyshv-тапочки-e/:id' });
  this.route('i-i-s-shfyovshofyshv-тапочки-e.new',
  { path: 'i-i-s-shfyovshofyshv-тапочки-e/new' });
});

export default Router;
