const axios = require('axios');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

//create project page which will hold all the users project names
//include if/else statment => if user (req.user.id) is truthy show their project names, if user is falsey link them to /project/new

router.get('/', function(req, res){
  res.render('profile')
})

module.exports = router;