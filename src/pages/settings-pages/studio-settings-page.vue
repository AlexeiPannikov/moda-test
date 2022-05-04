<template>
    <v-container class="h-100 d-flex flex-column">
        <v-row class="flex-grow-0" no-gutters>
            <h1 class="text-h3 text-text-primary font-weight-light mb-4">Studio Settings</h1>
        </v-row>
        <v-row class="flex-grow-1" no-gutters>
            <v-card class="h-100 w-100 d-flex px-5 py-5">
                <v-row no-gutters>
                    <v-col cols="2">
                        <v-list class="menu-settings-list h-100" density="compact">
                            <scroll-box-2>
                                <settings-list-item v-for="item in menuList"
                                    :to="{ name: 'studio', params: { item: item.pathParams } }" :key="item.name">
                                    {{ item.name }}
                                </settings-list-item>
                            </scroll-box-2>
                        </v-list>
                    </v-col>
                    <v-col cols="10"></v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import SettingsListItem from './components/settings-list-item.vue';
import scrollBox2 from "@components/scroll-box/scroll-box-2.vue";

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
</script>

<style lang="scss" scoped>
.menu-settings-list {
    border-right: 2px solid rgb(var(--v-theme-primary));
}
</style>