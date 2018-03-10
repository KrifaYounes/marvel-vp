import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';
import reducers from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';

export const history = createHashHistory();

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

syncHistoryWithStore(history, store);

export default store;
