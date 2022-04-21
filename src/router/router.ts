import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@layouts/layout.vue"
import ProductionPage from "@pages/production-page/production-page.vue"
import ErrorPage from "@pages/error-page.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        redirect: "/production",
        children: [
            {
                path: "/production",
                component: ProductionPage,
                redirect: '/production/in-progress'
            },
            {
                path: "/production/:type",
                name: "production",
                component: ProductionPage
            },
            {
                path: "/jobs",
                name: "jobs",
                component: ProductionPage
            },
            {
                path: "/products",
                name: "products",
                component: ProductionPage
            },
            {
                path: "/samples",
                name: "samples",
                component: ProductionPage
            },
            {
                path: "/tasks",
                name: "tasks",
                component: ProductionPage,
                children: [
                    {
                        path: "photography",
                        name: "photography",
                        component: ProductionPage
                    },
                    {
                        path: "final-selection",
                        name: "final-selection",
                        component: ProductionPage
                    },
                    {
                        path: "photo-review",
                        name: "photo-review",
                        component: ProductionPage
                    },
                    {
                        path: "external-post-qc",
                        name: "external-post-qc",
                        component: ProductionPage
                    },
                    {
                        path: "internal-post",
                        name: "internal-post",
                        component: ProductionPage
                    },
                    {
                        path: "internal-post-qc",
                        name: "internal-post-qc",
                        component: ProductionPage
                    },
                ]
            },
            {
                path: "/assets",
                name: "assets",
                component: ProductionPage
            },
            {
                path: "/wardrobe",
                name: "wardrobe",
                component: ProductionPage
            },
            {
                path: "/insights",
                name: "insights",
                component: ProductionPage
            },
            {
                path: "/labs",
                name: "labs",
                component: ProductionPage
            },

            {
                path: "/studio-settings",
                name: "studio-settings",
                component: ProductionPage
            },
            {
                path: "/workflows",
                name: "workflows",
                component: ProductionPage
            },
            {
                path: "/style-guides",
                name: "style-guides",
                component: ProductionPage
            },
            {
                path: "/debug-info",
                name: "debug-info",
                component: ProductionPage
            },
        ]
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