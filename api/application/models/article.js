import {articleSchema} from '../schemas/schemas';
import Model from './model';

class ArticleModel extends Model {
  constructor() {
    super('article', articleSchema());
  }

  findByCategory(cate) {
    return this._model.find({category: cate}).exec();
  }
}

export default ArticleModel;
