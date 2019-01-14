const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = () => {
  const schema = new Schema(
    {
      email: String,
      password: String,
      roles: Array,
      created: { type: Date, default: Date.now()},
    },
    { collection: 'user'});
    return schema;
}
export default userSchema;
