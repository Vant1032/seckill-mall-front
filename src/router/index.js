import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/test',
        component: () => import('../components/TestComponent')
    },
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
    }
];

const router = new VueRouter({
    routes
});

export default router;
