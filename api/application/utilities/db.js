import {ArticleModel} from '../models/model';
import {Seed} from '../config/config';
class DbHelper {
  seedDb() {
    if (this._shouldSeed(ArticleModel.model.find({}).exec())) {
      ArticleModel.model.create(Seed.articleSeed);
    }
  }
  async _shouldSeed(promise) {
    const documents = await promise;
    return documents.length === 0;
  }
}

export default DbHelper;
