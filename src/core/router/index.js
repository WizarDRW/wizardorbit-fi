import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import("@/views/auth/Login.vue")
        },
        {
            path: '/',
            component: () => import("@/layouts/Container.vue")
        }
    ]
})

export default router;