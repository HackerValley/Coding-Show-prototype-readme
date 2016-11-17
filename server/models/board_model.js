import mongoose, { Schema } from 'mongoose';

export default mongoose.model('board', new Schema({
  _id: String,
  pid: String, // 项目id
  boards: Object // 评论
}));
