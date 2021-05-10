import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: {
      uid: '',
      email: '',
    },
  },
  mutations: {
    onAuthStateChanged(state, auth) {
      if (auth) {
        state.auth.uid = auth.uid;
        state.auth.email = auth.email;
      } else {
        state.auth.uid = '';
        state.auth.email = '';
      }
    },
  },
});

export default store;
