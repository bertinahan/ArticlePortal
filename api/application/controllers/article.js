import Controller from './controller';
import {ArticleModel} from '../models/models';

class ArticleController extends Controller {
  constructor() {
    super(new ArticleModel());
  }

  acquire() {
    const articleModel = this._model;
    return async (req, res) => {
      try {
        const articles = await articleModel.find();
        res.status(200).send(articles);
      } catch (err) {
        res.status(400).send(err.message);
      }
    }
  }

  acquireOne() {
    return (req, res) => {
      res.status(200).send({});
    }
  }

  create() {
    return (req, res) => {
      res.status(200).send({});
    }
  }

  update() {
    return (req, res) => {
      res.status(200).send({});
    }
  }

  updateOne() {
    return (req, res) => {
      res.status(200).send({});
    }
  }

  delete() {
    return (req, res) => {
      res.status(200).send({});
    }
  }

  deleteOne() {
    return (req, res) => {
      res.status(200).send({});
    }
  }
}

export default new ArticleController();
