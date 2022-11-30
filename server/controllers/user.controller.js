const User = require('../models/user.model');
const fs = require('fs');

module.exports = class API {
    static async fetchAllUser(req, res) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async fetchUserByID(req, res) {
        const id = req.params.id;
        try {
            const post = await User.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async createUser(req, res) {
        const user = req.body;
        try {
            await User.create(user);
            res.status(201).json({message: "User created successfully"});
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    static async updateUser(req, res) {
        const id = req.params.id;
        const newInfo = req.body;
        try {
            await User.findByIdAndUpdate(id, newInfo);
            res.status(200).json({message: "User updated successfully"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    static async deleteUser(req, res) {
        const id = req.params.id;
        try{
            const result = await User.findByIdAndDelete(id);
            res.status(200).json({message: "User deleted successfully"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }
}