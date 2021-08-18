import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import VueJsModal from 'vue-js-modal'

// -------------------
//make jw pagination component available in application
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
  .$mount('#app');

Vue.config.productionTip = false
Vue.use(VueJsModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true,
    resizable: true
  }
})