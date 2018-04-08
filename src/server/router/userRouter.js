const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const expressValidator = require('express-validator');

const User = require('./../models/users');


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

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>
          err ? next(err) : newUser.password = hash);
          newUser.save()
        .then(() => {
          resp.redirect('http://localhost:3000/users/login');
        })
        .catch((er) =>
            console.log(er)
        );
    });
});


// Login Process
userRouter.post('/login',
  passport.authenticate('local', {
    successRedirect: '/blogs',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
)


module.exports = userRouter;
