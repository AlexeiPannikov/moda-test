import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ErrorPage from "@pages/error-page.vue";
import Production from "@/pages/production-page/production-page.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "app",
        redirect: 'production'
    },
    {
        path: "/production",
        name: "production",
        component: Production
    },
    {
        path: "/production/:type",
        name: "production-type",
        component: Production
    },
    {
        path: "/jobs",
        name: "jobs",
        component: Production
    },
    {
        path: "/products",
        name: "products",
        component: Production
    },
    {
        path: "/samples",
        name: "samples",
        component: Production
    },
    {
        path: "/tasks",
        name: "tasks",
        component: Production
    },
    {
        path: "/assets",
        name: "assets",
        component: Production
    },
    {
        path: "/wardrobe",
        name: "wardrobe",
        component: Production
    },
    {
        path: "/insights",
        name: "insights",
        component: Production
    },
    {
        path: "/labs",
        name: "labs",
        component: Production
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error-page',
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router