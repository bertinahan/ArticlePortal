const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = () => {
  const schema = new Schema(
    {
      content: String,
      author: String,
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
      created: { type: Date, default: Date.now()},
    },
    { collection: 'article'});
    schema.index({category: 1, created: -1});
    return schema;
}
export default articleSchema;
