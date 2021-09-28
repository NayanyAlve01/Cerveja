import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login';
import Produtos from '@/views/Produtos';
import { store } from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Login,
        name: 'Entrada',
    },
    {
        path: '/produtos',
        component: Produtos,
        name: 'beer',
        beforeEnter: (to, from, next) => {
            // console.log('BEFORE ENTER');
            if (!store.state.authenticated) {
                next('/');
            } else {
                next();
            }
        },
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;