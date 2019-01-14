import Route from './route';
import {ArticleController} from '../controllers/controllers';

class ArticleRoute extends Route {
  constructor() {
    super(ArticleController);
  }
}

export default new ArticleRoute();
