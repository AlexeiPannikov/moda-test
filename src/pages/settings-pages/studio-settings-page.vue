<template>
  <settings-page-template>
    <template #title>
      <h1 class="text-h3 text-text-primary font-weight-light mb-4">
        Studio Settings
      </h1>
    </template>

    <template #menu>
      <scroll-box-2>
        <settings-list-item
          v-for="item in menuList"
          :to="{ name: item.pathName }"
          :key="item.name"
        >
          {{ item.name }}
        </settings-list-item>
      </scroll-box-2>
    </template>

    <template #content>
      <!-- <component :is="component"></component> -->
      <router-view>
      </router-view>
    </template>
  </settings-page-template>
</template>

<script lang="ts" setup>
import { computed, shallowRef } from "@vue/reactivity";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import SettingsListItem from "@pages/components/settings-list-item.vue";
import Clients from "./clients/clients.vue";
import ScrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import SettingsPageTemplate from "@pages/components/settings-page-template.vue";

const route = useRoute();

const menuList = reactive([
  { name: "GENERAL SETTINGS", pathName: "general" },
  { name: "SECURITY SETTINGS", pathName: "security" },
  { name: "DEVELOPER", pathName: "developer" },
  { name: "USERS", pathName: "users" },
//   { name: "USER ROLES", pathName: "roles" },
//   { name: "USER GROUPS", pathName: "groups" },
//   { name: "LOCATIONS", pathName: "locations" },
//   { name: "CONTAINERS", pathName: "containers" },
//   { name: "POST-PRODUCTION", pathName: "post" },
  { name: "CLIENTS", pathName: "clients" },
//   { name: "PRESETS", pathName: "presets" },
//   { name: "PRODUCT VENDORS", pathName: "vendors" },
//   { name: "NETWORK PRINTERS", pathName: "network" },
//   { name: "PRINTER CONFIGURATIONS", pathName: "configurations" },
])
</script>
