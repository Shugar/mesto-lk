import Vue from 'vue';
import Revue from 'revue';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import wrap from 'utils/duck-wrap';
import ducks from 'ducks';


export default function configureStore(initialState) {
  const logger = createLogger();
  
  const reduxStore = createStore(
    ducks.rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
  
  const actions = wrap(ducks.actions, reduxStore.dispatch);

  // binding the store to Vue instance, actions are optional
  const store = new Revue(Vue, reduxStore, actions);
  return store;
}
