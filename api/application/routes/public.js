import jwt from 'jsonwebtoken';
import {Secrets} from '../config/configs';

class PublicRoute {
  constructor() {
    this.router = this.authRouter();
  }

  authRouter() {
    const jwtSecret = Secrets.jwt.apiSecret;
    return async (req, res, next) => {
      const token = req.headers.authorization;
      if (token) {
        jwt.verify(token, jwtSecret, (err, decoded) => {
          if (err) {
            return res.status(401).send('Failed to authenticate token');
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        if (req.url === '/auth')
          next();
        else
        return res.status(403).send('No token provided');
      }
    }
  }
}

export default new PublicRoute();
