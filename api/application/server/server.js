import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {ArticleRoute, AuthRoute, PublicRoute} from '../routes/routes';
import {RouteUtils} from '../utilities/utils';

class Server {
  constructor() {
    this.app = express();
    this._init();
  }

    /**
     * Initialize api server
     */
    _init() {
      const app = this.app;
      const apiPrefixUrl = '/api/v1';
      const middlewares = [];
      middlewares.push(bodyParser.urlencoded({ extended: false }));
      middlewares.push(bodyParser.json());
      middlewares.push(cookieParser());
      middlewares.push()
      app.set('etag', false);
      middlewares.forEach((middleware) => {
        app.use(middleware);
      });
      app.use(`${apiPrefixUrl}`, PublicRoute.router);
      app.use(`${apiPrefixUrl}/auth`, AuthRoute.router);
      app.use(`${apiPrefixUrl}/articles`, ArticleRoute.router);
      app.use(function(req, res, next){
        res.status(404);
        res.type('txt').send('Not found');
      });
      app.get('/', (req, res) => {
        res.send('api server is running ...');
      });
    }

    start() {
      const app = this.app;
      app.listen(5000, () => {console.log('App is listening on port 5000')});
    }
}

export default new Server();
