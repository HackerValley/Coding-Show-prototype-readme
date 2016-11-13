#server端说明

###服务器环境
1.nodejs版本 [https://nodejs.org/en/](https://nodejs.org/en/)  6.9.1 LTS
2.框架 express 4
3.数据库  mongo
4.数据操作mongoose
~~5.redis~~
###后端开发任务
- 模型设计
- ~~路由设计~~controller api设计
-  基础代码编写
- 功能模块
导航条登入状态
导航条未登入状态
开源项目（主页）
项目详情页
注册     第三方登录
登入
添加项目页
我发布的项目列表页
我发布的项目详情页
修改项目页
我开发的项目列表页
个人设置页
后台页面（开发此页面请先联系@易燃询问用途）

###目录结构
**~~使用[*express生成器*](http://expressjs.com/zh-cn/starter/generator.html)~~**
>//安装express-generator
npm install express-generator -g  
 //建立server文件夹   
express --view=ejs server       
再加 models  controllers文件夹

**server目录结构**
讨论版本
```
├── index.js //入口文件
├── package.json
├── public //静态文件库
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes//更新为controllers
│   ├── index.js
│   └── users.js
├── models //新添加
│   ├── projects.js
│   └── users.js
└── views //渲染模板
    ├── error.ejs

    ├── index.ejs

    └── layout.ejs
```
server文件夹结构（目前）
```
├─index.js //入口文件
├─package.json 
│  
├─config //数据库配置
│      index.js
│      
├─controllers //api接口
│      index.js
│      
├─models //数据模型
│      project.js
│      user.js
│                  
├─public 静态资源
│  ├─images
│  ├─javascripts
│  └─stylesheets
│          style.css
│          
└─views 渲染模板
        error.ejs
        index.ejs
        project.ejs
        

```
###数据模型
+ 用户数据模型
```
users {
    _id: String,
    username: String, //用户名
    nickname: String, //昵称  第三方登录时，存储第三方用户的昵称
    passwd: String, //密码
    level: Number, //用户等级
    telephone: String, //用户电话
    email: String, //用户邮箱
    skill: Array, //技能
    access_token: String,//第三方token
    expire_time: String, //token的失效时间
    sns_type: Number,//第三方用户类型 微信 qq。。。 
    avatar: String, //头像 
    create_time: Date, //创建时间
    last_login_time: Date //最后登录时间
}
```

+ 项目数据模型

```
project {
  _id: String, //项目id
  uid: String, //上传的用户 id
  project_name: String, //项目名称
  description: String, //一句话描述
  detail: String, //简介
  imagePath: Array, //项目图片 字符串数组
  project_link: String, //链接
  star_count: Number, //点赞数
  star_users:Array, //点赞用户 存储用户id
  status: Number, //可用/禁用
  create_time: Date, //创建时间
  mod_time: Date //最后修改时间
}
```

###api接口设计
[*rap*](http://http://rap.taobao.org/)

###分工
+ 第三方账号对接
+ （如果需要 ） 账号注册登录
+ restful 