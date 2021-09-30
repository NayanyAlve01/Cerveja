import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const authenticated = !!localStorage.getItem('token');

export const store = new Vuex.Store({
  state: {
    headers: {},
    authenticated,
  },
  mutations: {
    setHeaders: (state, headers) => state.headers = headers,
    setAuth: (state, auth) => state.authenticated = auth
  },

});