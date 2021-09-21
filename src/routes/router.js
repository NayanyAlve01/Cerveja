import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/pages/Login';
import Produtos from '@/pages/Produtos';

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
        name:'beer',
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router;
