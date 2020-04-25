import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        name: 'login',
        path: '/login',
        component: () => import('../views/user/login'),
    },
    {
        name: 'home',
        path: '/index',
        component: () => import('../views/user/home'),
    },
    {
        name: 'merchantLogin',
        path: '/merchant/login',
        component: () => import('../views/merchant/login')
    },
    {
        name: 'merchantManage',
        path: '/merchant/manage',
        component: () => import('../views/merchant/manage')
    },
    {
        name: 'merchantCreateGoods',
        path: '/merchant/createGoods',
        component: () => import('../views/merchant/createGoods')
    },
    {
        name: 'merchantShowGoods',
        path: '/merchant/showGoods',
        component: () => import('../views/merchant/showGoods')
    },
    {
        name: 'userGoodsDetail',
        path: '/goods/detail',
        component: () => import('../views/user/goodsDetail')
    },
    {
        name: 'userOrderCreate',
        path: '/user/order/create',
        component: () => import('../views/user/order/UserOrderCreate')
    },
    {
        name: 'userInfo',
        path: '/user/info',
        component: () => import('../views/user/UserInfo')
    },
    {
        name: 'userCreateReceiveAddress',
        path: '/user/createReceiveAddress',
        component: () => import('../views/user/ReceiveAddress/CreateReceiveAddress')
    },
    {
        name: 'userDeleteReceiveAddress',
        path: '/user/DeleteReceiveAddress',
        component: () => import('../views/user/ReceiveAddress/DeleteReceiveAddress')
    },
];

const router = new VueRouter({
    routes
});

export default router;
