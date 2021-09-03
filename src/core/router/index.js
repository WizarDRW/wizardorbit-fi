import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import("@/views/auth/Login.vue")
        },
        {
            path: '/',
            component: () => import("@/layouts/Container.vue"),
            children: [
            ]
        }
    ]
})

export default router;