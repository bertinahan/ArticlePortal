import {userSchema} from '../schemas/schemas';
import Model from './model';

class UserModel extends Model {
  constructor() {
    super('user', userSchema());
  }

  findOneByEmail(email) {
    return this._model.findOne({email: email}, {password, roles});
  }
}

export default UserModel;
