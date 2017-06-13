import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import tasks from './reducers/tasks';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers({tasks,router: routerReducer}),applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  history={history}>
                <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
