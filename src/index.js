import 'babel-polyfill';
import Vue from 'vue';

import configureStore from 'store/configureStore';
import App from './App';

export const store = configureStore();


new Vue({
  el: '#app',
  render: h => h(App)
});
