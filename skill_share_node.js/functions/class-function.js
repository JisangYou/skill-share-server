var mongoose = require('mongoose');
var classes = require('../models/classes');



exports.getVideo = function (classId, callback) {

    classes.findById(classId, function (err, clas) {

        if (!err) {
            callback(clas.lessons);

        } else {
            callback(err);
        }
    })
}

exports.getLessons = function (classId, callback) {
    classes.findById(classId, function (err, clas) {
        if (!err) {
            callback(clas.lessons);
        } else {
            callback(err);
        }
    })
};

exports.getAbout = function (classId, callback) {
    classes.findById(classId, function (err, aClass) {
        if (!err) {
            var subscribers = aClass.about.subscribers;

            if (subscribers.length > 10) {
                var partOfSubscribers;
                for (var i = 0; i < 20; i++) {
                    partOfSubscribers.push(subscribers[i]);
                }
                aClass.about.subscribers = partOfSubscribers;
            }

            callback(aClass.about);
        } else {
            callback(err);
        }
    })
}

exports.getSubscribers = function (classId, position, callback) {
    classes.findById(classId, function (err, aClass) {
        if (!err) {
            var subscribers = aClass.about.subscribers;

            var partOfSubscribers;
            if (subscribers.length >= position + 20) {
                for (var i = position; i < position + 20; i++) {
                    partOfSubscribers.push(subscribers[i]);
                }
            } else {
                for (var i = position; i < subscribers.length; i++) {
                    partOfSubscribers.push(subscribers[i]);
                }
            }

            callback(partOfSubscribers);
        } else {
            callback({
                result: "failure"
            });
        }
    })
}

exports.getDiscussions = function (classId, callback) {
    classes.findById(classId, function (err, clas) {
        if (!err) {
            classes.populate(clas, { path: 'discussions', model: 'discussion' }, function (err, clas) {
                callback(clas.discussions);
            });
        } else {
            callback(err);
        }
    })
}

exports.search = function (content, callback) {
    classes.find({ title: { $regex: content } }, { _id: 1, imageUrl: 1, title: 1, tutorName: 1, totalDuration: 1, reviewPercent: 1, subscriberCount: 1 }, function (err, searchedClasses) {
        console.log(searchedClasses);
        callback(searchedClasses);
    })
}

exports.addSubscriber = function (classId, subscriber, callback) {


    classes.findById(classId, function (err, clas) {

        var checkSubscribe;



        for (var i = 0; i < clas.about.subscribers.length; i++) {

            if (clas.about.subscribers[i]._id == subscriber._id) {
                clas.about.subscribers.remove(subscriber);
                checkSubscribe = true;
                break;
            }

        }

        if (checkSubscribe != true) {
            clas.about.subscribers.push(subscriber);
        }


        clas.save(function (err) {

            if (!err) {
                console.log("================================");
                console.log(clas.about.subscribers);
                console.log("================================");
                callback(clas.about.subscribers)

            } else {
                callback(err);
            }
        })
    })
}


