require('dotenv').config();
const axios = require('axios');
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const helmet = require('helmet');
const isLoggedIn = require('./middleware/isLoggedIn');
const session = require('express-session');
const app = express();
const passport = require('./config/ppConfig');
const methodOverride = require('method-override');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');
const RateLimit = require('express-rate-limit');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);
app.use(helmet());


//Rate limiters for login and signup
const loginLimiter = new RateLimit({
  windowMs: 100 * 60 * 5, 
  max: 3,
  message: 'Maximum login attempts exceeded. Please try again later.'
});

const signupLimiter = new RateLimit({
  windowMs: 100 * 60 * 60,
  max: 3,
  message: 'Maximu accounts created. Please try again later.'
})

// Apply rate limiters to the routes. Removed during testing. 
// app.use('/auth/login', loginLimiter);
// app.use('/auth/signup', signupLimiter);


// Sotre sessions in the database 
const sessionStore = new SequelizeStore({
  db: db.sequelize,
  expiration: 1000 * 60 * 30
});

//Use this line once to set up the store table
sessionStore.sync();

//Session must come before flash and passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

// Must come after session and after passport middleware 
app.use(flash());

//These two lines must come after we set up the session
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
  res.render('index');
});

//
app.get('/homepage', function(req, res){
  res.render('homepage')
})



app.use('/auth', require('./routes/auth'));
app.use('/project', isLoggedIn, require('./routes/project'))
app.use('/profile', isLoggedIn, require('./routes/profile'))


var server = app.listen(process.env.PORT || 3004, () => console.log(`🎧 You're listening to Port 3004🎧`));

module.exports = server;
