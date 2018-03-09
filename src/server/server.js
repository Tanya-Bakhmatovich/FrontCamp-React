import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import router from './router/index';
const blogRouter = require('./router/blogRouter');
const userRouter = require('./router/userRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/database');
const messages = require('express-messages');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
import App from './../containers/App';

mongoose.connect(config.database);
const db = mongoose.connection;

db.on('error', () => console.log('connection failed'));
db.once('open', () => console.log('Connected to dbBlogs'));

const app = express();

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'html');

// Passport config
app.use(passport.initialize());
app.use(passport.session());

const checkAuth = (req, resp, next) => {
  return req.isAuthenticated() ? next() : resp.redirect('/users/login');
}

app.get('/blogs', checkAuth, (req, res) => {
  res.send(renderToString(<App />));
});

app.use('/', router);

app.use('/blogs', blogRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening')
})
