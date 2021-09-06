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
            redirect: { name: 'Bash' },
            component: () => import("@/layouts/Container.vue"),
            children: [
                {
                    name: 'Bash',
                    path: '/bash',
                    component: () => import('@/views/bash/Bash.vue')
                }
            ]
        }
    ]
})

export default router;