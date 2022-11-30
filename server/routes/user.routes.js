const express = require('express');
const router = express.Router();
const API = require('../controllers/user.controller');


router.route('/')
    .get(API.fetchAllUser)
    .post(API.createUser)

router.route('/:id')
    .get(API.fetchUserByID)
    .patch(API.updateUser)
    .delete(API.deleteUser);

module.exports = router;