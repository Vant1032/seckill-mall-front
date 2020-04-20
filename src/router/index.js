import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: () => import('../views/user/login'),
    },
    {
        path: '/index',
        component: () => import('../views/user/home'),
    },
    {
        path: '/merchant/login',
        component: () => import('../views/merchant/login')
    },
    {
        path: '/merchant/manage',
        component: () => import('../views/merchant/manage')
    },
    {
        path: '/merchant/createGoods',
        component: () => import('../views/merchant/createGoods')
    },
    {
        path: '/merchant/showGoods',
        component: () => import('../views/merchant/showGoods')
    },
    {
        path: '/goods/detail',
        component: () => import('../views/user/goodsDetail')
    }
];

const router = new VueRouter({
    routes
});

export default router;
