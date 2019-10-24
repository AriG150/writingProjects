const axios = require('axios');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const methodOverride = require('method-override');
const db = require('../models');


// shows index of all users project names 
router.get('/', function(req, res) {
  db.project.findAll({
    where: {
      userId: req.user.id
    }
  })
  .then(function(project){
    res.render('profile', {project})
    })
    .catch(function(error){
      console.log(error)
    })
})

// delete route to delete individual projects via their name 
router.delete('/:id', function(req, res) { 
  db.project.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.redirect('/profile')
  }).catch(function(error){
    console.log(error)
  })
})

//form to edit name of project
router.get('/edit/:id', function(req, res) {
  db.project.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(projectInfo){
    res.render('edit', {projectInfo})
  })
    .catch(function(error){
      console.log(error)
  })
})

//Edit the name of the project
router.put('/edit/:id', function(req, res){
  db.project.update({
    name: req.body.projectName
  }, {
    where: {
      id: req.params.id
    },
    include: [db.entry]
  })
    .then(function(projectInfo){
      res.redirect('/profile')
    })
    .catch(function(error){
      console.log(error)
    })
})



module.exports = router;