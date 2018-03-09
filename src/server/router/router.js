import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import WelcomePage from '../../components/WelcomePage';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../../redux/reducers/reducers';
import { StaticRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import LoginForm from '../../components/LoginForm';
import App from '../../containers/App';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const router = express.Router();
const logger = createLogger();
const store = createStore(rootReducer);
const context = {};

router.get('/', (req, res, next) => {
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Switch>
                    <Route exact path='/' component={WelcomePage}></Route>
                    <Route path='/users/register' component={RegisterForm}></Route>
                    <Route path='/users/login' component={LoginForm}></Route>
                    <Route path='/blogs' component={App}></Route>
                </Switch>
            </StaticRouter>
        </Provider>
    );
    res.send(
        `<!DOCTYPE html>
        <html>
            <head>
                <title>Blog application</title>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' >
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
            </head>
            <body>
                <div class="container">
                    <div class="row">
                        <h1 class="col-12 text-center">Welcome</h1>
                        <div id="app">${html}</div>
                        <script src="bundle.js"></script>
                    </div>
                </div>
            </body>
        </html>`);
    res.end();
});

export default router;
