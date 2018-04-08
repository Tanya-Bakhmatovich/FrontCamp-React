import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../redux/reducers/reducers';

const store = createStore(rootReducer);

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
