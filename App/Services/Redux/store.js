import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";

const logger = createLogger({});

/*const store = createStore(
    reducers,
    applyMiddleware(
        logger,
        promiseMiddleware
    )
);*/

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        logger,
        promiseMiddleware
    )    // other store enhancers if any
));

export default store;