var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Recipe', new Schema({
  _id: String, //项目id
  uid: String, //上传的用户 id
  project_name: String, //项目名称
  description: String, //一句话描述
  detail: String, //简介
  imagePath: Array, //项目图片 字符串数组
  project_link: String, //链接
  star_count: Number, //点赞数
  star_users: Array, //点赞用户 存储用户id
  status: Number, //可用/禁用
  create_time: Date, //创建时间
  mod_time: Date //最后修改时间
}));
