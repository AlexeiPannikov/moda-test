import { setDocumentTitle } from './functions/setDocumentTitle';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from "@layouts/main-layout.vue"
import LoginPage from "@pages/auth-pages/login-page.vue"
import ErrorPage from "@pages/error-page.vue";
import Production from "@pages/production-page/production-page.vue";
import StudioSettings from "@pages/settings-pages/studio-settings-page.vue";
import AddClient from "@/pages/add-client-page/add-client-page.vue";
import Clients from "@pages/settings-pages/clients/clients.vue";
import GeneralSettings from "@pages/settings-pages/general-settings/general-settings.vue";
import SecuritySettings from "@pages/settings-pages/security-settings/security-settings.vue";
import Developer from "@pages/settings-pages/developer/developer.vue";
import Users from "@pages/settings-pages/users/users-page.vue"
import AddUser from "@pages/settings-pages/users/add-user/add-user.vue"
import UserSettings from "@pages/settings-pages/users/add-user/settings/user-settings.vue"
import ContactInfo from "@pages/settings-pages/users/add-user/contact-info/contact-info.vue"
import DateAndTime from "@pages/settings-pages/users/add-user/date-and-time/date-and-time.vue"
import Skills from "@pages/settings-pages/users/add-user/skills/skills.vue"
import Properties from "@pages/settings-pages/users/add-user/properties/properties.vue"
import UserGroups from "@pages/settings-pages/users/add-user/user-groups/user-groups.vue"
import AuthService from './api/services/AuthService';

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/",
        name: "app",
        component: MainLayout,
        redirect: 'production',
        children: [
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
                    {
                        path: '/settings/studio/developer',
                        name: "developer",
                        component: Developer
                    },
                    {
                        path: '/settings/studio/users',
                        name: "users",
                        component: Users,
                    },
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
                path: "/settings/studio/users/add-user",
                name: "add-user",
                component: AddUser,
                children: [
                    {
                        path: '/settings/studio/users/add-user/settings',
                        name: 'user-settings',
                        component: UserSettings
                    },
                    {
                        path: '/settings/studio/users/add-user/contact-info',
                        name: 'contact-info',
                        component: ContactInfo
                    },
                    {
                        path: '/settings/studio/users/add-user/date-and-time',
                        name: 'date-and-time',
                        component: DateAndTime
                    },
                    {
                        path: '/settings/studio/users/add-user/skills',
                        name: 'skills',
                        component: Skills
                    },
                    {
                        path: '/settings/studio/users/add-user/properties',
                        name: 'properties',
                        component: Properties
                    },
                    {
                        path: '/settings/studio/users/add-user/user-groups',
                        name: 'user-groups',
                        component: UserGroups
                    },
                ]
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

router.beforeEach(async (to, from, next) => {
    try {
        const res = await AuthService.getCurrentUser()
        if (!res && to.name !== "login") {
            next({ name: 'login' })
        } else {
            next()
        }
    } catch {
        if (to.name === 'login') {
            next()
        } else {
            next({ name: 'login' })
        }
    }
})

router.afterEach((to, from) => {
    setDocumentTitle(to.name as string, ...Object.values(to.params) as any)
})

export default router