import projectHandlers from '../handlers/project_handlers.js';

export default function (app) {
  //添加项目模板
  app.get('/api/projects/new', function(){
    
  });
  //获取项目列表
  app.get('/api/projects/list', (req, res) => {

  });
  //获取我发布的项目
  app.get('/api/projects/release', (req, res) => {

  });
  //我开发的项目
  app.get('/api/projects/development', (req, res) => {

  });
  //获取项目详情页
  app.get('/api/projects/:id/', (req, res) => {
    
  });
  //创建项目
  app.post('/api/projects', (req, res) => {
    
  });
  //修改项目
  app.put('/api/projects/:id', (req, res) => {
    
  });
}
