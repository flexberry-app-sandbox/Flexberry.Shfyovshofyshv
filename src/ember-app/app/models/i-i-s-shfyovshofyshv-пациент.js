import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПациентMixin
} from '../mixins/regenerated/models/i-i-s-shfyovshofyshv-пациент';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПациентMixin, Validations, {
});

defineProjections(Model);

export default Model;
