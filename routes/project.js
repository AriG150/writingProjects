const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

router.get('/new', function(req, res){
  res.render('new')
})


module.exports = router;