import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import VueJsModal from 'vue-js-modal'

Vue.config.productionTip = false


Vue.use(VueJsModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true,
    resizable: true
  },
  height: 600,
  width:  800
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
