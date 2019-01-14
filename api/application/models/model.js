import mongoose from 'mongoose';

class Model {
  constructor(name, schema) {
    this._model = mongoose.model(name, schema);
  }

  find() {
    return this._model.find().exec();
  }

  findById(id) {
    return this._model.findById(id).exec();
  }

  insertOne(data = {}) {
    return this._model.create(data).exec();
  }

  get model() {
    return this._model;
  }
}
export default Model;
