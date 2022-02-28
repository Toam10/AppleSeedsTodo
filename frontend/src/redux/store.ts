import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export const store = createStore(combineReducers({}), applyMiddleware(logger));
