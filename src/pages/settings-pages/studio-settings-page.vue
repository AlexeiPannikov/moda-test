<template>
    <settings-page-template>
        <template #title>
            <h1 class="text-h3 text-text-primary font-weight-light mb-4">Studio Settings</h1>
        </template>

        <template #menu>
            <scroll-box-2>
                <settings-list-item v-for="item in menuList" :to="{ name: 'studio', params: { item: item.pathParams } }"
                    :key="item.name">
                    {{ item.name }}
                </settings-list-item>
            </scroll-box-2>
        </template>

        <template #content>
            <component :is="component"></component>
        </template>
    </settings-page-template>
</template>

<script lang="ts" setup>
import { computed, shallowRef } from '@vue/reactivity';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import SettingsListItem from '@pages/components/settings-list-item.vue';
import Clients from './clients/clients.vue'
import ScrollBox2 from '@components/scroll-box/scroll-box-2.vue';
import SettingsPageTemplate from '@pages/components/settings-page-template.vue';

const route = useRoute()

const menuList = reactive([
    { name: "GENERAL SETTINGS", pathParams: "general" },
    { name: "SECURITY SETTINGS", pathParams: "security" },
    { name: "DEVELOPER", pathParams: "developer" },
    { name: "USERS", pathParams: "users" },
    { name: "USER ROLES", pathParams: "roles" },
    { name: "USER GROUPS", pathParams: "groups" },
    { name: "LOCATIONS", pathParams: "locations" },
    { name: "CONTAINERS", pathParams: "containers" },
    { name: "POST-PRODUCTION", pathParams: "post" },
    { name: "CLIENTS", pathParams: "clients" },
    { name: "PRESETS", pathParams: "presets" },
    { name: "PRODUCT VENDORS", pathParams: "vendors" },
    { name: "NETWORK PRINTERS", pathParams: "network" },
    { name: "PRINTER CONFIGURATIONS", pathParams: "configurations" },
])

const component = computed(() => {
    switch (route.params.item) {
        case "clients":
            return Clients
    }
})

</script>