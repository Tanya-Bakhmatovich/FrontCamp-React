const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const expressValidator = require('express-validator');

const User = require('./../models/users');

// userRouter.get('/', (req, resp) =>
//   resp.render('users')
// );

//Register Form
// userRouter.get('/register', (req, resp) =>
//   resp.render('register', {title: 'Register', message: 'Please, register'}));

// Register process

userRouter.use(expressValidator());

userRouter.post('/', (req, resp, next) => {
      const { username, name, email, password  } = req.body;
      const newUser = new User({
        username,
        name,
        email,
        password,
      });

      req.checkBody('username', 'Username is required').notEmpty();
      req.checkBody('name', 'Name is required').notEmpty();
      req.checkBody('email', 'Email is required').notEmpty();
      req.checkBody('password', 'Password is required').notEmpty();

      const errors = req.validationErrors();
console.log(errors);
// if(errors) {
//     console.log('errors')
// } else {
//      newUser.save();
// }

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>
          err ? next(err) : newUser.password = hash);
          newUser.save();
    //     .then(() => {
    //       console.log('success');
    //     })
    //     .catch(() =>
    //     errors
    //     );
    });
});

//Login
// userRouter.get('/login', (req, resp) =>
//   resp.render('login', { title: 'Login', message: 'Please, log in', errors: req.flash('error') }));

// Login Process
userRouter.post('/login',
  passport.authenticate('local', {
    successRedirect: '/blogs',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);

module.exports = userRouter;
