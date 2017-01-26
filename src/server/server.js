var express = require('express');
var bodyParser = require('body-parser');
var db = require('./schema');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client'))

app.listen(8000, function() {
  console.log('Listening on port 8000');
});

var axl = new db.Person({
  username: 'axl',
  password: 'rose'
});
axl.save();

db.Person.find({}, function(err, users) {
  console.log(users);
})