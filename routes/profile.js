const axios = require('axios');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const methodOverride = require('method-override');
const db = require('../models');


//create project page which will hold all the users project names
//include if/else statment => if user (req.user.id) is truthy show their project names, if user is falsey link them to /project/new

router.get('/', function(req, res) {
  db.project.findAll({
    where: {
      userId: req.user.id
    }
  })
  .then(function(project){
    // console.log(`🐙`, project)
    res.render('profile', {project})
    })
    .catch(function(error){
      console.log(`🚨`, 'YOU HAVE AN ERROR')
      console.log(error)
    })
})

router.delete('/:id', function(req, res) { 
  db.project.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.redirect('/profile')
  }
  ).catch(function(error){
    console.log(`🚨`)
    console.log(error)
  })
})

module.exports = router;