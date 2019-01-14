import jwt from 'jsonwebtoken';

export const AuthRoute = () => {
  return async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          return res.status(401).send('Auth fail');
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send('No token');
    }
  }
}
