import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import VueJsModal from 'vue-js-modal'

// -------------------


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