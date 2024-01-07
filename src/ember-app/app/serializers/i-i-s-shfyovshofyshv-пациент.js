import { Serializer as ПациентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shfyovshofyshv-пациент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПациентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
