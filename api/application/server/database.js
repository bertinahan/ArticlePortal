import mongoose from 'mongoose';

class Database {
  constructor() {
    this.dbUrl = 'mongodb://127.0.0.1/articles';
    this._init();
  }

    /**
     * Initialize api server
     */
    _init() {
      console.log(`db is ${this.dbUrl}`);
      mongoose.connect(this.dbUrl, {useNewUrlParser: true, useCreateIndex: true,});
      // Get Mongoose to use the global promise library
      mongoose.Promise = global.Promise;
      //Get the default connection
      this.db = mongoose.connection;
    }

    start() {
      const db = this.db;
      const dbUrl = this.dbUrl
      db.on('connected', function() {
        console.log(`Mongoose default connection is open to ${dbUrl}`);
      });
    }

}

export default new Database();
