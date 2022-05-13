<template>
  <settings-page-template>
    <template #title>
      <h1 class="text-h3 text-text-primary font-weight-light mb-4">
        <v-btn @click="goBack" icon="mdi-arrow-left" style="background: transparent" flat></v-btn> Users
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
      <router-view>
      </router-view>
    </template>
  </settings-page-template>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import SettingsListItem from "@pages/components/settings-list-item.vue";
import ScrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import SettingsPageTemplate from "@pages/components/settings-page-template.vue";

const route = useRoute()
const router = useRouter()

const menuList = reactive([
  { name: "SETTINGS", pathName: "user-settings" },
  { name: "CONTACT INFO", pathName: "contact-info" },
  { name: "DATE AND TIME", pathName: "date-and-time" },
  { name: "SKILLS", pathName: "skills" },
  { name: "PROPERTIES", pathName: "properties" },
  { name: "USER GROUPS", pathName: "user-groups" },
])

const goBack = () => {
    router.push({name: 'users'})
} 
</script>

