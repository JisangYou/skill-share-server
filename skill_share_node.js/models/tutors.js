var mongoose = require('mongoose');
var Schema = mongoose.Schema;

tutorSchema = new Schema({
    // TODO 채우기
    tutorId : String,
    name : String,
    followers : String,
    imageUrl : String
});


module.exports = mongoose.model('tutor', tutorSchema);