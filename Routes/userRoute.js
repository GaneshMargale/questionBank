const express = require('express');
const authController = require('../Controller/authController');

const router = express.Router();
// Route to add a member by exciting member
router.route('/signup').post(authController.signup);

//Rout to login a member
router.route('/login').post(authController.login);

//Route to delete a member
router.route('/deleteUser').post(authController.deleteUser);

module.exports = router;
