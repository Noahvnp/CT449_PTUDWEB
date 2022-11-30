const Post = require('../models/post.model');
const fs = require('fs');

module.exports = class API {
    static async fetchAllPost(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async fetchPostByID(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async createPost(req, res) {
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({message: "Post created successfully"});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    static async updatePost(req, res) {
        const id = req.params.id;
        var new_image = "";
        // Nếu ảnh tồn tại lấy tên mới + gỡ bỏ ảnh cũ
        if(req.file) {
            new_image = req.file.filename;
            console.log(req.body.old_image);
            try {
                fs.unlinkSync('./uploads/' + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        } else {
            // Nếu không tồn tải file ảnh mới thì vẫn lấy tên ảnh cũ
            new_image = req.body.old_image;
        }

        const newPost = req.body;
        newPost.image = new_image;
        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: "Post updated successfully"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async deletePost(req, res) {
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);
            if(result.image != '') {
                try{
                    fs.unlinkSync('./uploads/' + result.image);
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({message: "Post deleted successfully"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
}