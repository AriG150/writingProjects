const axios = require('axios');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

const BASE_URL = 'https://ineedaprompt.com/dictionary/default/prompt?q=';

//GET- reads the prompt that the user chose on /homepage
router.get('/new', function(req, res){
  // res.render('homepage')
  axios.get(`${BASE_URL}${req.query.promptType}`)
    .then(function(promptInfo){
      var selectedPrompt = promptInfo.data
      console.log(selectedPrompt)
      res.render('new', {prompt: selectedPrompt})
    })
})



//CREATE, holds all prompt, user, project, entry information associated with a prompt, saved to DB's 
router.post('/new', function(req, res){
  db.prompt.findOrCreate({
    where: {
      text: req.body.prompt
    }
  })
    .then(function([prompt, created]){
      console.log('🎉', prompt)
      db.project.create({
        name: req.body.projectName,
        promptId: prompt.id,
        userId: req.user.id
      }).then(function(project){
        db.entry.create({
          text: req.body.textField,
          projectId: project.id
        })
        .then(function(entry){
          res.redirect(`/project/${project.id}`)
        })
      })
    }) 
    .catch(function(error){
      console.log(error)
    })
})


// Call/get the prompt (text), project(name), entry(text) information from the database, res.render onto view.ejs
router.get('/:id', function(req, res){
  db.project.findOne({
    where: {
      id: req.params.id
    },
    include: [db.prompt, db.entry]
  })
  .then(function(project){
    res.render('view', { project })
    console.log(`🐷`, project )
  })
  .catch(function(error){
    console.log(error)
  })
})

router.post('/project/:id', function(req, res){
  db.entry.create({
    text: req.body.textField
  })
  .then(function(entry){
    res.redirect('/project/:id')
  })
  .catch(function(error){
    console.log(`🚨`, error)
  })
})


module.exports = router;