import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import("../../layouts/Container.vue")
        }
    ]
})

export default router;