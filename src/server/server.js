import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from "serialize-javascript";
import { StaticRouter, matchPath } from "react-router-dom";
import routes from '../shared/routes';
// import config from './config/database';
// import router from './router/router';
const blogRouter = require('./router/blogRouter');
const userRouter = require('./router/userRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const flash = require('connect-flash');
const session = require('express-session');
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../redux/reducers/reducers';
import App from '../shared/App';

const store = createStore(rootReducer);

mongoose.connect('mongodb://localhost:27017/dbBlogs');
const db = mongoose.connection;

db.on('error', () => console.log('connection failed'));
db.once('open', () => console.log('Connected to dbBlogs'));

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData ?
    activeRoute.fetchInitialData(req.path) : Promise.resolve();

    promise.then((data) => {
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <App data={data} />
                </StaticRouter>
            </Provider>
        )
        res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Blogs app</title>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' >
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
                <script src='/bundle.js' defer></script>
              </head>

              <body>
                <div id="app">${markup}</div>
              </body>
            </html>
        `)
    }).catch(next)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(flash());

const checkAuth = (req, resp, next) => {
    console.log('I work');
  return req.isAuthenticated() ? next() : resp.redirect('/users/login');
}

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'html');

// Passport config
app.use(passport.initialize());
app.use(passport.session());

// app.use('/', router);
//
app.use('/blogs', blogRouter);
app.use('/users', userRouter);

app.get('/blogs', checkAuth, (req, res) => {
 // res.send(renderToString(<App />));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening')
})
