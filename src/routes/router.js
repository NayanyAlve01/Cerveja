import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '@/pages/Login';
import Produtos from '@/pages/Produtos';


const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/produtos',
        component: Produtos
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;
