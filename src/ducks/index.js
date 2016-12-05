import {combineReducers} from 'redux';

import * as nav from './nav';

export default {
  rootReducer: combineReducers({
    nav: nav.default
  }),
  actions: {
    nav
  }
};
