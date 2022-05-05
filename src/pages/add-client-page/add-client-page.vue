<template>
    <settings-page-template>
        <template #title>
            <v-btn icon="mdi-arrow-left" style="background: transparent" flat></v-btn> Clients
        </template>

        <template #menu>
            <settings-list-item v-for="item in menuList" :to="{ name: 'add-client', params: { item: item.pathParams } }"
                :key="item.name">
                {{ item.name }}
            </settings-list-item>
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
import ScrollBox2 from '@components/scroll-box/scroll-box-2.vue';
import SettingsPageTemplate from '@pages/components/settings-page-template.vue';
import Settings from './components/settings.vue'

const route = useRoute()

const menuList = reactive([
    { name: "SETTINGS", pathParams: "settings", component: shallowRef(Settings) },
    { name: "SAMPLE SETTINGS", pathParams: "sample" },
    { name: "DELIVERY OPTIONS", pathParams: "delivery" },
    { name: "METADATA NAMESPACE", pathParams: "namespace" },
    { name: "DATA SOURCE", pathParams: "source" },
    { name: "REFERENCE IMAGE ALERTS", pathParams: "alerts" },
])

const component = computed(() => {
    return menuList.find(item => item.pathParams === route.params.item).component
})

</script>

<style lang="scss" scoped>

</style>