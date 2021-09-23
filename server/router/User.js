const express = require('express');
const User = require('../schema/userschema')

const router = express.Router();
const userCtrl = require('../controllers/UserController');

//api for user register
router.post("/api/mean_project/v1/register",userCtrl.Register);



module.exports = router