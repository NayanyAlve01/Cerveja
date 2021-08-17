import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import VueJsModal from 'vue-js-modal'
import Pagination  from 'vue-pagination-2'
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
  el: "#app",
  components: {
    Pagination
  },
  data: {
    page: 45
  },
  methods: {
    callback: function(page) {
      console.log(`Page ${page} was selected. Do something about it`);
    }
  },
  router,
  render: h => h(App),
}).$mount('#app');

