var mongoose = require('mongoose');
var projects = require('../models/projects');
var classes = require('../models/classes');

exports.getProject = function(classId, callback) {
   
    projects.find({classId: classId}, function(err, proj) {
        
        if(!err) {
            callback(proj);
        } else {
            callback(err);
        }
    })
};