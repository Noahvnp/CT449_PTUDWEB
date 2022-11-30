const express = require('express');
const router = express.Router();
const API = require('../controllers/post.controller');
const multer = require('multer');

// multer middleware
var storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './uploads/');
    },
    filename: function (req, file, callback){
        callback(null, file.originalname);
    },
});

var upload = multer({storage: storage}).single("image");

router.route('/')
    .get(API.fetchAllPost)
    .post(upload, API.createPost)

router.route('/:id')
    .get(API.fetchPostByID)
    // .put(API.updatePost)
    .patch(upload, API.updatePost)
    .delete(API.deletePost);

module.exports = router;