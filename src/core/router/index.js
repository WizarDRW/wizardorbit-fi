import { createRouter, createWebHistory } from "vue-router"

const isAuth = (to, from, next) => {
    next();
}

const isAccess = (role, to, from, next) => {
    next();
}

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
            beforeEnter: (to, from, next) => {
                isAuth(to, from, next);
            },
            component: () => import("@/layouts/Container.vue"),
            children: [
                {
                    name: 'Bash',
                    path: '/bash',
                    beforeEnter: (to, from, next) => {
                        isAccess(store.currentUser.role, to, from, next)
                    },
                    component: () => import('@/views/bash/Bash.vue')
                }
            ]
        }
    ]
})

export default router;