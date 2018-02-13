var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    classId : String,
    subscriberName : String,
    projectTitle : String,
    projectPictureUrl : String,
    projectLikeCount : String,
    
}, {versionKey : false});

module.exports = mongoose.model('project', projectSchema);