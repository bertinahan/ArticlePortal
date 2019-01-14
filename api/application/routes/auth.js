import Route from './route';
import {AuthController} from '../controllers/controllers';

class AuthRoute extends Route {
  constructor() {
    super(AuthController);
  }
}

export default new AuthRoute();
