import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login';
import Produtos from '@/pages/Produtos';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'entrada',
        component: Login,
    },
    {
        path: '/produtos',
        name:'beer',
        component: Produtos,
        meta: {
            requeresAuth: true
        }
    },

];

const router = new VueRouter({
    routes,
    mode: 'history'
});
router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
  });
export default router;
