import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

import epics from './epics';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const middleware = [createLogger(), epicMiddleware, routerMiddleware(history)];

const storeEnhancers = [applyMiddleware(...middleware)];

const store = createStore(createRootReducer(history), compose(...storeEnhancers));

epicMiddleware.run(epics);

export default store;
