import VueRouter from "vue-router";


const routes = [
    {
        path: '/test',
        component: () => import('../components/TestComponent')
    },
    {
        path: '/login',
        component: () => import('../views/login'),
    }
];

const router = new VueRouter({
    routes
});

export default router;
