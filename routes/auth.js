const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');

//show signup form
router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

// Find or create the user 
router.post('/signup', function(req, res){
  db.user.findOrCreate({
    where: {email: req.body.email},
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then(function([user, created]) {
    if ( created) {
        passport.authenticate('local', {
          successRedirect: '/homepage',
          successFlash: 'Account created and logged in!'
        }) (req, res);
    } else {
      //If user existed, error and reidrect to signup
        req.flash('error', 'Email already exists')
        res.redirect('/auth/signup');
    }
  }).catch(function(err) {
      console.log(`🚨 ${err}`);
      res.redirect('/auth/signup');
  });
});


router.get('/login', function(req, res) {
  res.render('auth/login');
});


//POST form for login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/homepage',
  successFlash: 'You have logged in!',
  failureRedirect: '/auth/login',
  failureFlash: 'Invalid username and/or password'
}));

//Logout 
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success', 'You have logged out');
  res.redirect('/login');
});

module.exports = router;
