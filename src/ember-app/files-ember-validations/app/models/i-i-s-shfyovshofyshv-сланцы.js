import {
  defineNamespace,
  defineProjections,
  Model as СланцыMixin
} from '../mixins/regenerated/models/i-i-s-shfyovshofyshv-сланцы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СланцыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
