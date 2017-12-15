const
  express = require('express'),
  http = require('http'),
  bodyparser = require('body-parser'),
  router = require('./router'),
  app = express();

app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(router);

app.listen(3001);
