(function(exports){
  var express = require('express');
  var app = express();

  app.set('port', (process.env.PORT || 6969));

  app.use(express.static(__dirname + '/public'));

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.get('/', function(request, response) {
    response.render('index');
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
  module.exports = app;

})(this);
