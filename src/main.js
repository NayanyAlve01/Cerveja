import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js';
import VueJsModal from 'vue-js-modal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JwPagination from 'jw-vue-pagination';
import firebase from "firebase";


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC8q3jql-ZXK3iprsoIFZ1NnYRgMmeTAIw',
  authDomain: 'vue-auth-firebase-7d733.firebaseapp.com',
  databaseURL: 'https://vue-auth-firebase-7d733.firebaseio.com',
  projectId: 'vue-auth-firebase-7d733',
  storageBucket: 'vue-auth-firebase-7d733.appspot.com',
  messagingSenderId: '93229610542'
};
firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});


Vue.config.productionTip = false
Vue.use(VueJsModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true,
    resizable: true
  }
});