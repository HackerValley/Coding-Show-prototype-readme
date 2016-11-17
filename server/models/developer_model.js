import mongoose, { Schema } from 'mongoose';

export default mongoose.model('developer', new Schema({
  _id: String,
  uid: String, //用户id
  pid: String, //参与项目id
  dev_skills: Array //开发技术栈
}));
