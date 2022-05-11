import { setDocumentTitle } from './functions/setDocumentTitle';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ErrorPage from "@pages/error-page.vue";
import Production from "@pages/production-page/production-page.vue";
import StudioSettings from "@pages/settings-pages/studio-settings-page.vue";
import AddClient from "@/pages/add-client-page/add-client-page.vue";
import Clients from "@pages/settings-pages/clients/clients.vue";
import GeneralSettings from "@pages/settings-pages/general-settings/general-settings.vue";
import SecuritySettings from "@pages/settings-pages/security-settings/security-settings.vue";

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
        redirect: '/settings/studio'
    },
    {
        path: "/settings/studio",
        name: 'studio',
        component: StudioSettings,
        children: [
            {
                path: '/settings/studio/general',
                name: "general",
                component: GeneralSettings
            },
            {
                path: '/settings/studio/security',
                name: "security",
                component: SecuritySettings
            },
            //   { path: '/settings/studio/developer', name: "developer" },
            //   { path: '/settings/studio/users', name: "users" },
            //   { path: '/settings/studio/roles', name: "roles" },
            //   { path: '/settings/studio/groups', name: "groups" },
            //   { path: '/settings/studio/locations', name: "locations" },
            //   { path: '/settings/studio/containers', name: "containers" },
            //   { path: '/settings/studio/post', name: "post" },
            {
                path: "/settings/studio/clients",
                name: "clients",
                component: Clients,
            },
            //   { path: '/settings/studio/presets', name: "presets" },
            //   { path: '/settings/studio/vendors', name: "vendors" },
            //   { path: '/settings/studio/network', name: "network" },
            //   { path: '/settings/studio/configurations', name: "configurations" },
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

router.afterEach((to, from) => {
    setDocumentTitle(to.name as string, ...Object.values(to.params) as any)
})

export default router