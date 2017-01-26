var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String
})

var Person = mongoose.model('Person', UserSchema);

exports.Person = Person;