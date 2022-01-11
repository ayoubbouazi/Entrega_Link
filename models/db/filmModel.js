const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('films', filmSchema);


// module.exports = mongoose.model('User', mongoose.Schema({
//   mail: String
// }));