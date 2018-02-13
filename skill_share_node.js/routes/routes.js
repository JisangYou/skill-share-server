// gcm
var gcmFunction = require('../functions/gcm-function');
// user
var userFunction = require('../functions/user-function');
// main
var home = require('../constants/home');
// class
var classFunction = require('../functions/class-function');
// discussion
var discussionFunction = require('../functions/discussions-function');
var groupFunction = require('../functions/group-function');

// project

var projectFunction = require('../functions/project-function');

// TODO
var streamVideo = require('../functions/stream-video');

// mongoose temp for saving class
var mongoose = require('mongoose');
var classes = require('../models/classes');
var groups = require('../models/groups');
var comments = require('../models/comments');
var projects = require('../models/projects');

module.exports = function (app) {

    app.get('/np', function (req, res) {
        var newProject = new projects({

            // classId : "SEO Today: Strategies to Earn Trust, Rank High, and Stand Out",
            // subscriberName : "Lia Zadeh",
            // projectTitle : "Exercise: Filling someone's heart",
            // projectPictureUrl : "https://static.skillshare.com/uploads/project/136145/cover_800_22dfce2360f2c6a64f5484059134b299.jpg",
            // projectLikeCount : "300"


            // classId : "SEO Today: Strategies to Earn Trust, Rank High, and Stand Out",
            // subscriberName : "Adrienne Tilley",
            // projectTitle : "sushi",
            // projectPictureUrl : "https://static.skillshare.com/uploads/project/136125/cover_800_b6cb56b8647e1f9c35fb4890cdf30d62.png",
            // projectLikeCount : "560"


            // classId : "SEO Today: Strategies to Earn Trust, Rank High, and Stand Out",
            // subscriberName : "Fernando",
            // projectTitle : "Crazy'bout patterns",
            // projectPictureUrl : "https://static.skillshare.com/uploads/project/136030/cover_800_7bb8b7d143b1c39c1222c81a5e4141e8.jpg",
            // projectLikeCount : "276"

            // classId : "let's dance",
            // subscriberName : "dj kahled",
            // projectTitle : "play!!",
            // projectPictureUrl : "https://static.skillshare.com/uploads/project/136145/cover_800_22dfce2360f2c6a64f5484059134b299.jpg",
            // projectLikeCount : "300"

            classId: "let's study",
            subscriberName: "jisang",
            projectTitle: "genious guy you jisang",
            projectPictureUrl: "https://static.skillshare.com/uploads/project/135847/cover_800_03957f1be80a77f6c108654e4a559620.png",
            projectLikeCount: "300"

        });

        newProject.save(function (err, project) {
            if (!err) {
                console.log("new project : " + project);
                res.json(project);
            }
        })
    })

    app.get('/ng', function (req, res) {
        var newGroup = new groups({
            groupName: "Caligraphy & Lettering",
            groupThumbnail: "https://i.ytimg.com/vi/sBoVGqiSzr4/maxresdefault.jpg",
            memberCount: "2.4k",
            comments: []
        });

        newGroup.save(function (err, group) {
            if (!err) {
                console.log("new group : " + group);
                res.json(group);
            }
        })
    });

    app.get('/ncls', function (req, res) {

        var newClass = new classes({
            title: "SEO Today: Strategies to Earn Trust, Rank High, and Stand Out",
            imageUrl: "https://static.skillshare.com/uploads/video/thumbnails/562151dcbe554d7341678c16c8d07f6c/448-252",
            tutorName: "Rand Fishkin",
            totalDuration: "4140000",
            reviewPercent: "99",
            subscriberCount: "0",
            lessons: {
                title: "SEO Today: Strategies to Earn Trust, Rank High, and Stand Out",
                totalDuration: "4140000",
                reviewPercent: "99",
                subscriberCount: "100",
                tutor: {
                    tutorId: "RFID",
                    name: "Rand Fishkin",
                    followers: "100",
                    imageUrl: "https://static.skillshare.com/uploads/users/4880302/user-image-medium.jpg?854842768"
                },
                videos: [{
                    url: "https://f1.media.brightcove.com/12/3695997568001/3695997568001_5463401859001_5463396146001.mp4?pubId=3695997568001&videoId=5463396146001",
                    title: "Introduction",
                    duration: "137000",
                    thumbnailUrl: "https://static.skillshare.com/uploads/video/thumbnails/562151dcbe554d7341678c16c8d07f6c/651-366",
                    order: "1"
                },
                {
                    url: "https://f1.media.brightcove.com/12/3695997568001/3695997568001_5480247711001_5480233767001.mp4?pubId=3695997568001&videoId=5480233767001",
                    title: "I. Link Earning, Whiteboard",
                    duration: "916000",
                    thumbnailUrl: "",
                    order: "2"
                },
                {
                    url: "https://f1.media.brightcove.com/12/3695997568001/3695997568001_5463277991001_5463244831001.mp4?pubId=3695997568001&videoId=5463244831001",
                    title: "I. Link Earning, Screencast",
                    duration: "356000",
                    thumbnailUrl: "",
                    order: "3"
                },
                {
                    url: "https://f1.media.brightcove.com/12/3695997568001/3695997568001_5485037286001_5485012419001.mp4?pubId=3695997568001&videoId=5485012419001",
                    title: "II. On-Page Optimization, Whiteboard",
                    duration: "820000",
                    thumbnailUrl: "",
                    order: "4"
                },
                {
                    url: "https://f1.media.brightcove.com/12/3695997568001/3695997568001_5463277798001_5463280286001.mp4?pubId=3695997568001&videoId=5463280286001",
                    title: "II. On-Page Optimization, Screencast",
                    duration: "217000",
                    thumbnailUrl: "",
                    order: "5"
                }]
            },
            about: {
                projects: [
                    {
                        projectId: "project ID 1",
                        classId: "Designer in a Van: On Tour with Aaron Draplin",
                        projectPictureUrl: "https://static.skillshare.com/uploads/project/86752/cover_800_5b12e1d35cda8ba2070e87998ade8cba.jpg",
                    },
                    {
                        projectId: "project ID 2",
                        classId: "Designer in a Van: On Tour with Aaron Draplin",
                        projectPictureUrl: "https://static.skillshare.com/uploads/project/132805/cover_800_606e1e9271bc5f5ffbdbc94466899835.jpg",
                    },
                    {
                        projectId: "project ID 3",
                        classId: "Designer in a Van: On Tour with Aaron Draplin",
                        projectPictureUrl: "https://static.skillshare.com/uploads/project/136145/cover_800_22dfce2360f2c6a64f5484059134b299.jpg",
                    }
                ],
                reviews: [{
                    likeOrNot: "like",
                    content: "good good very good!!",
                    reviewerId: "temp ID",
                    reviewerName: "Epik High",
                    imageUrl: "https://static.skillshare.com/uploads/project/61144/cover_800_e10d97be1e6045c496651c90efd59572.jpg"
                }],
                subscribers: [
                    {
                        subscriberId: "James ID",
                        name: "James",
                        imageUrl: "http://img2.sbs.co.kr/img/sbs_cms/CH/2016/06/06/CH92438362_w300_h300.jpg"
                    },
                    {
                        subscriberId: "ChicChoc ID",
                        name: "ChicChoc",
                        imageUrl: "http://img2.sbs.co.kr/img/sbs_cms/CH/2016/06/06/CH82423479_w300_h300.jpg"
                    },
                    {
                        subscriberId: "Butter Waffle ID",
                        name: "Butter Waffle",
                        imageUrl: "https://i.ytimg.com/vi/eqEcRwmV2vU/maxresdefault.jpg"
                    },
                    {
                        subscriberId: "Computer ID",
                        name: "Computer",
                        imageUrl: "http://blogimg.ohmynews.com/attach/26495/1372921881.jpg"
                    },
                    {
                        subscriberId: "Apple ID",
                        name: "Apple",
                        imageUrl: "http://cfile23.uf.tistory.com/image/9907AF3359C0C1153C71D2"
                    }
                ],
                relatedClasses: [{
                    classId: "class ID 1",
                    thumbnailUrl: "https://cdn-images-1.medium.com/max/2000/1*7pjzaWKedACc3-olWUghLg.png",
                    title: "iOS Design I: Getting Started with UX",
                    tutorName: "Kara Hodecker"
                }, {
                    classId: "class ID 2",
                    thumbnailUrl: "https://learn.canva.com/wp-content/uploads/2015/10/40-People-Through-History-Who-Changed-Design-For-Good-04.png",
                    title: "Getting Started with Sketch: Design a Beautiful App",
                    tutorName: "Christian Krammer"
                }, {
                    classId: "class ID 3",
                    thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeQXRYXiQyOD3f_Kbw3lvlvo92XMcMImEJrqcwKq1JliJQkfj",
                    title: "Mobile App Prototyping",
                    tutorName: "Noah Levin"
                }]
            },
            discussions: []
        });
        newClass.save(function (err, clas) {
            if (err) {
                res.send("save class error : " + err);
            } else {
                res.send("saved class success : " + clas);
            }
        });
    });

    // user
    app.post('/user/subscribeClass', function (req, res) {
        userFunction.subscribeClass(req.query.userId, req.query.classId, function (result) {
            res.json(result);
        });
    });

    app.post('/user/unsubscribeClass', function (req, res) {
        userFunction.unsubscribeClass(req.query.userId, req.query.classId, function (result) {
            res.json(result);
        });
    });

    app.get('/user/authorization', authorization, function (req, res) {
        userFunction.getMyInfo(req.token, function (result) {
            res.json(result);
        });
    });

    function authorization(req, res, next) {
        var token = req.headers['authorization'];
        if (token) {
            req.token = token;
            next();
        } else {
            res.send(403);
        }
    }

    app.get('/user/:id', function (req, res) {
        var userId = req.params.id;
        userFunction.getUser(userId, function (result) {
            res.json(result);
        });
    });

    app.post('/user/sign-up', function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var name = req.body.name;

        if (typeof email == 'undefined' || typeof password == 'undefined' || typeof name == 'undefined') {
            res.json({
                result: 'failure',
                message: 'request : invalid value type'
            });
        } else if (!email.trim() || !password.trim() || !name.trim()) { // 앞뒤로 공백 제거하고 null 이면
            res.json({
                result: 'failure',
                message: 'request : empty value'
            });
        } else {
            userFunction.signUp(email, password, name, function (result) {
                res.json(result);
            });
        }
    });

    app.get('/users/sign-in', function (req, res) {
        var email = req.query.email;
        var password = req.query.password;

        if (typeof email == 'undefined' || typeof password == 'undefined') {
            res.json({ // TODO <<< json 파일로 응답형식 만들어놓고 사용하기
                result: 'failure',
                message: 'request : invalid value type'
            });
        } else if (!email.trim() || !password.trim()) {
            res.json({
                result: 'failure',
                message: 'request : empty value'
            });
        } else {
            userFunction.signIn(email, password, function (result) {
                res.json(result);
            });
        }
    });

    app.put('/user/follow/:userId', function (req, res) {
        userFunction.followOrUnfollow(req.params.userId, req.body, function (result) {
            res.json(result);
        });
    });

    app.post('/user/followSkills', function (req, res) {
        var userId = req.query.userId;
        var skills = req.query.skills;
        userFunction.followSkills(userId, skills, function (result) {
            res.json(result);
        });
    });

    app.post('/user/joinGroup', function (req, res) {

        // groupFunction.joinGroup(req.query.userNickname, function(result) {

        // })

        userFunction.joinGroup(req.body, req.query.userId, function (result) {
            res.json(result);
        });
    });

    app.post('/user/setNickname', function (req, res) {
        var userId = req.query.userId;
        var nickname = req.query.nickname;

        userFunction.setNickname(userId, nickname, function (result) {
            res.json(result);
        });
    });

    var multipart = require('connect-multiparty');
    var multipartMiddleware = multipart({
        uploadDir: 'public/images'
    });

    app.post('/user/uploadImageFile', multipartMiddleware, function (req, res) {
        var userId = req.query.userId;
        var temp = req.files["image"].path;
        var path = temp.substring(7, temp.length);

        userFunction.setImageUrl(userId, path, function (result) {
            res.json(result);
        });
    });

    // todo 지상====================================================
    app.post('/user/group/uploadImageFile', multipartMiddleware, function (req, res) {
        var userId = req.query.userId;
        var temp = req.files["image"].path;
        var path = temp.substring(7, temp.length);
        var groupInfo = req.body;


        userFunction.setGroupImageUrl(userId, path, groupInfo, function (result) {
            res.json(result);
        })
    })
    //=================================================================
    app.post('/user/DeletesubscribedClass', function (req, res) {
        var userId = req.query.userId;
        var subscribeClass = req.body;

        userFunction.deleteSubscribeClass(userId, subscribeClass, function (result) {
            res.json(result);
        })
    })

    // main
    app.get('/home', function (req, res) {
        var list = req.query.types;

        var resList = [];

        resList.push(home.Best);
        resList.push(home.Feature);
        resList.push(home.Trending);

        // if(list.indexOf("f") >= 0) { <<< follow skills check
        // }


        for (var i = 0; i < list.length; i++) {
            if (list[i] == "Design") {
                resList.push(home.Design)
            }
            if (list[i] == "Photography") {
                resList.push(home.Photography)
            }
            if (list[i] == "Business") {
                resList.push(home.Business)
            }
            if (list[i] == "Technology") {
                resList.push(home.Technology)
            }
            if (list[i] == "Crafts") {
                resList.push(home.Crafts)
            }
            if (list[i] == "Culinary") {
                resList.push(home.Culinary)
            }
            if (list[i] == "Film") {
                resList.push(home.Film)
            }
            if (list[i] == "Fashion") {
                resList.push(home.Fashion)
            }
            if (list[i] == "Music") {
                resList.push(home.Music)
            }
            if (list[i] == "Lifestyle") {
                resList.push(home.Lifestyle)
            }
            if (list[i] == "Gaming") {
                resList.push(home.Gaming)
            }
        }
        res.json(resList);
    });

    app.get('/seeAll/homeItem/:category', function (req, res) {
        var category = req.params.category;
        var resList = [];
        if (category == "Best This Month") {
            resList = home.Best;
        }
        if (category == "Feature On Skillshare") {
            resList = home.Feature;
        }
        if (category == "Trending Now") {
            resList = home.Trending;
        }
        if (category == "Fashion") {
            resList = home.Fashion;
        }
        if (category == "Photography") {
            resList = home.Photography;
        }
        if (category == "Business") {
            resList = home.Business;
        }
        if (category == "Technology") {
            resList = home.Technology;
        }
        if (category == "Culinary") {
            resList = home.Culinary;
        }
        if (category == "Film") {
            resList = home.Film;
        }
        if (category == "Fashion") {
            resList = home.Fashion;
        }
        if (category == "Music") {
            resList = home.Music;
        }
        if (category == "Lifestyle") {
            resList = home.Lifestyle;
        }
        if (category == "Gaming") {
            resList = home.Gaming;
        }

        res.json(resList);

    });

    app.get('/group', function (req, res) {
        res.json(require('../constants/group'));
    });

    app.get('/group/getComments/:groupId/:position', function (req, res) {
        var groupId = req.params.groupId;
        var position = req.params.position;

        groupFunction.getComments(groupId, position, function (result) {
            res.json(result);
        });
    })

    app.post('/group/sendComment', function (req, res) {
        var groupName = req.query.groupName;
        var comment = req.body;

        groupFunction.sendComment(groupName, comment, function (result) {
            res.json(result);
        });
    });

    app.get('/discover', function (req, res) {
        res.json(require('../constants/discover'));
    });

    // class

    app.get('/class/:id', function (req, res) {
        var classId = req.params.id;
        console.log(classId);
        classFunction.getVideo(classId, function (result) {
            res.json(result);
        })
    });

    app.get('/class/lessons/:id', function (req, res) {
        var classId = req.params.id;

        classFunction.getLessons(classId, function (result) {
            res.json(result);
        });
    });

    app.get('/class/about/:id', function (req, res) {
        var classId = req.params.id;

        classFunction.getAbout(classId, function (result) {
            res.json(result);
        });
    });

    app.get('/class/discussions/:id', function (req, res) {
        var classId = req.params.id;

        classFunction.getDiscussions(classId, function (result) {
            res.json(result);
        });
    });

    app.get('/class/search/:content', function (req, res) {
        classFunction.search(req.params.content, function (result) {
            res.json(result);
        });
    });

    app.post('/class/addSubscriber/:classId', function (req, res) {
        var classId = req.params.classId;
        var subscriber = req.body;
        classFunction.addSubscriber(classId, subscriber, function (result) {
            res.json(result);
        });
    });



    // discussion
    app.post('/class/sendDiscussion', function (req, res) {
        var classId = req.query.classId;
        var discussion = req.body;

        discussionFunction.sendDiscussion(discussion, classId, function (result) {
            res.json(result);
        });
    });

    app.post('/discussions/addReply', function (req, res) {
        var discussionId = req.query.discussionId;
        var reply = req.body;

        console.log("dicussionId : " + discussionId);

        discussionFunction.addReply(reply, discussionId, function (result) {
            res.json(result);
        });
    });

    app.post('/discussions/like', function (req, res) {
        var userName = req.body.userName;
        var resId = req.body.resId;
        var message = userName + " 님이 회원님의 글을 좋아합니다."

        gcmFunction.sendLikeMessage(message, resId, function (result) {
            console.log(result);
        });

        var discussionId = req.body.discussionId;
        var userId = req.body.userId;

        discussionFunction.like(discussionId, userId, function (result) {
            res.json(result);
        });
    })

    app.post('/discussions/unlike', function (req, res) {
        var discussionId = req.body.discussionId;
        var userId = req.body.userId;

        discussionFunction.unlike(discussionId, userId, function (result) {
            res.json(result);
        });

        var userName = req.body.userName;
        var resId = req.body.resId;
        var message = userName + " 님이 좋아요를 취소하셨습니다."

        gcmFunction.sendLikeMessage(message, resId, function (result) {
            console.log(result);
        });
    })

    app.get('/seeAll/subscribers/:classId/:position', function (req, res) {
        var classId = req.params.classId;
        var position = req.params.position;

        classFunction.getSubscribers(classId, position, function (result) {
            res.json(result);
        });
    })

    // seeAll project

    app.get('/seeAll/project/:classId', function (req, res) {
        projectFunction.getProject(req.params.classId, function (result) {
            res.json(result);
        });
    });

    // Google Cloud Messaging
    app.post('/device/register', function (req, res) { // device register
        // retrofit interface 에 정의 : post >>> /devices >>> @Body RequestBody variables
        var userId = req.body.userId;
        var registrationId = req.body.registrationId;

        // type 체크
        if (typeof userId == 'undefined' || typeof deviceName == 'undefined' || typeof deviceId == 'undefined' || typeof registrationId == 'undefined') {
            res.json({ // TODO <<< json 파일로 응답형식 만들어놓고 사용하기
                result: 'failure',
                message: 'request : invalid value type'
            });
        } else if (!userId.trim() || !deviceName.trim() || !deviceId.trim() || !registrationId.trim()) { // 앞뒤로 공백 제거하고 null 이면
            res.json({
                result: 'failure',
                message: 'request : empty value'
            });
        } else {
            gcmFunction.register(userId, registrationId, function (result) {
                res.json(result);
            });
        }
    });

    app.post('/send', function (req, res) { // send Message
        var userName = req.body.userName;
        var userId = req.body.userId;
        var message = userName + " 님이 회원님의 글을 좋아합니다."

        gcmFunction.sendMessage(message, userId, function (result) {
            res.json(result);
        });
    });
}