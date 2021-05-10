import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(App),
  store,
});

firebase.auth().onAuthStateChanged((auth) => {
  store.commit('onAuthStateChanged', auth);

  app.$mount('#app');
});
