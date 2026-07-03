import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/HomePage.vue";
import PrivacyPolicy from "@/PrivacyPolicy.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router