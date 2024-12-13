const express = require("express");
const router = express.Router();
const usercontroller = require('../controller/users.controller')

router.post('/signup',usercontroller.signup)

module.exports = router;