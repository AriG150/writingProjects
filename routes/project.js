const axios = require('axios');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');


router.get('/:id', function(req, res){
  res.send('does this work?')
})

router.post('/new', function(req, res){
  db.prompt.findOrCreate({
    where: {
      text: req.body.prompt
    }
  })
    .then(function([prompt, created]){
      console.log('🎉')
      console.log(prompt);
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
          console.log(`🍕 got tags`)
          res.redirect(`/project/${project.id}`)
        })
      })
    })
})




//create or find prompt, create project with prompt id, create entry with project id, redirect to  []


module.exports = router;