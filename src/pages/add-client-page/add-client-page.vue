<template>
    <settings-page-template>
        <template #title>
            <v-btn @click="goBack" icon="mdi-arrow-left" style="background: transparent" flat></v-btn> Clients
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
import { useRoute, useRouter } from 'vue-router';
import SettingsListItem from '@pages/components/settings-list-item.vue';
import ScrollBox2 from '@components/scroll-box/scroll-box-2.vue';
import SettingsPageTemplate from '@pages/components/settings-page-template.vue';
import Settings from './components/settings.vue'
import SampleSettings from './components/sample-settings.vue'
import DeliveryOptions from './components/delivery-options/delivery-options.vue';
import MetadataNamespace from './components/metadata-namespace/metadata-namespace.vue';
import DataSources from './components/data-sources/data-sources.vue';
import ReferenceImageAlerts from './components/reference-image-alerts/reference-image-alerts.vue';

const route = useRoute()
const router = useRouter()

const menuList = reactive([
    { name: "SETTINGS", pathParams: "settings", component: shallowRef(Settings) },
    { name: "SAMPLE SETTINGS", pathParams: "sample", component: shallowRef(SampleSettings) },
    { name: "DELIVERY OPTIONS", pathParams: "delivery", component: shallowRef(DeliveryOptions) },
    { name: "METADATA NAMESPACE", pathParams: "namespace", component: shallowRef(MetadataNamespace) },
    { name: "DATA SOURCE", pathParams: "source", component: shallowRef(DataSources) },
    { name: "REFERENCE IMAGE ALERTS", pathParams: "alerts", component: shallowRef(ReferenceImageAlerts) },
])

const component = computed(() => {
    return menuList.find(item => item.pathParams === route.params.item).component
})

const goBack = () => {
    router.push({name: 'studio', params: {item: 'clients'}})
}

</script>

<style lang="scss" scoped>

</style>