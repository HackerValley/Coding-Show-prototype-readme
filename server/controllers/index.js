//引入express
var Express = require('express');

var Users = require('../models/user');
var Projects = require('../models/project');
var config = require('../config');

var app = new Express();
var apiRoutes = Express.Router();

app.set('superSecret', config.secret);

apiRoutes.post('/login', function(req, res) {
  
});


module.exports = apiRoutes;