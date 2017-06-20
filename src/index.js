import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import tasks from './reducers/tasks';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({tasks,router: routerReducer}),
    composeWithDevTools(applyMiddleware(thunk,middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  history={history} >
                <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
