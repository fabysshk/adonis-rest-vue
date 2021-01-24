import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://adonis-rest.vercel.app/api/v0/';

Axios.interceptors.request.use(
  function(config) {
    const token = store.state.auth.token;

    if (token != null) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function(err) {
    if (err.response.status === 401) {
      console.log('unauthorized, logging out ...');
      store.state.auth.token = '';
      localStorage.clear();
      router.push('/auth?message=login');
    }

    return Promise.reject(err);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
