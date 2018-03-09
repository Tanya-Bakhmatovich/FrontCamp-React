import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../redux/reducers/reducers';
import WelcomePage from '../components/WelcomePage';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import App from '../containers/App';
import { AppContainer } from 'react-hot-loader';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Switch>
                <Route exact path='/' component={WelcomePage}></Route>
                <Route path='/users/register' component={RegisterForm}></Route>
                <Route path='/users/login' component={LoginForm}></Route>
                <Route path='/blogs' component={App}></Route>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render();
    })
}
