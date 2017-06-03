const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  price: Number,
  picture: String,
  topic: String,
  reason: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  address: String,
  longitude: Number,
  latitude: Number,
  businessHours: [String],
});

const commentSchema = new Schema({
  openId: String,
  userName: String,
  avatar: String,
  contents: String,
  likes: [String],
  nominate: [String],
});
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Comments = mongoose.model('Comment', commentSchema);
exports.Restaurant = Restaurant;
exports.Comment = Comments;