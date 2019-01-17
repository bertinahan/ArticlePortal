import jwt from 'jsonwebtoken';
import Controller from "./controller";
import {UserModel} from '../models/models';
import {Secrets} from '../config/configs';

class AuthController extends Controller {
  constructor() {
    super(new UserModel());
  }

  create() {
    const userModel = this._model;
    return async (req, res) => {
      const {email, password} = req.body;
      const user = await userModel.findOneByEmail(email);
      if (user && user.password === password) {
        const authentication = jwt.sign({
          email: email,
          roles: user.roles,
        },
        Secrets.jwt.apiSecret,
        {expiresIn: '1d'},
        );
        res.status(201).send(`auth= ${authentication}`);

      }
      res.status(401).send('auth fail');
    }
  }

}

export default new AuthController();
