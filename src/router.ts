import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ErrorPage from "@pages/error-page.vue";
import Production from "@pages/production-page/production-page.vue";
import StudioSettings from "@pages/settings-pages/studio-settings-page.vue"
import AddClient from "@/pages/add-client-page/add-client-page.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "app",
        redirect: 'production'
    },
    {
        path: "/production",
        redirect: { name: "production", params: { type: "in-progress" } }
    },
    {
        path: "/production/:type",
        name: "production",
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

    /* --------------------- Settings ------------------------ */
    {
        path: "/settings",
        redirect: { name: "studio-settings" }
    },
    {
        path: "/settings/studio",
        component: StudioSettings,
        children: [
            {
                path: "/settings/studio/:item",
                name: "studio",
                component: StudioSettings,
            },
        ]
    },
    {
        path: "/settings/studio/client/add-client/:item",
        name: "add-client",
        component: AddClient,
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