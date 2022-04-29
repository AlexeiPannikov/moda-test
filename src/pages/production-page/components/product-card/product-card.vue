<template>
    <div class="product-card">

        <!-- Card header -->
        <header class="card-header">

            <!-- product code -->
            <div class="product-code">
                <div class="label">
                    Product code
                </div>
                <div class="code">
                    {{ props.product.code }}
                </div>
            </div>

            <!-- tabs -->
            <ui-tabs :tabs="tabs">
                <template #default="data">
                    <tab-item-slider :item="data.item" @click="tabClickHandler" />
                </template>
            </ui-tabs>

        </header>

        <!-- Card body -->
        <main class="card-body">
            <scroll-box>
                <component :is="getComponent" />
            </scroll-box>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { ProductModel } from './ProductModel';
import UiTabs from '@components/ui-tabs/ui-tabs.vue'
import TabItemSlider from '@components/ui-tabs/tab-item-slider.vue'
import { computed, reactive, ref } from '@vue/reactivity';
import { TabItemModel } from '@/components/ui-tabs/TabItemModel';
import { TabsModel } from '@/components/ui-tabs/TabsModel';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, onUnmounted, onUpdated } from 'vue';
import Overview from "./components/overview.vue"
import ScrollBox from '@/components/scroll-box/scroll-box.vue';

interface IProps {
    product: ProductModel
}

const props = withDefaults(defineProps<IProps>(), {
    product: () => new ProductModel()
})

const route = useRoute()
const router = useRouter()

const tabs = reactive(
    new TabsModel({
        tabList: [
            new TabItemModel({ id: 1, name: "Overview", isActive: true }),
            new TabItemModel({ id: 2, name: "Styling" }),
            new TabItemModel({ id: 3, name: "Samples" }),
            new TabItemModel({ id: 4, name: "Assets" }),
        ],
    })
);

const tabClickHandler = (tab: TabItemModel<any>) => {
    router.push({ name: route.name, query: { ...route.query, prod: tab.name } })
    tabs.setActiveTabById(tab.id)
}

onMounted(() => {
    if (route.query.prod) {
        tabs.setActiveTabByQuery('name', route.query.prod as string)
    }
})

const getComponent = computed(() => {
    switch (tabs.activeTab.name) {
        case "Overview":
            return Overview
    }
})

// const emit = defineEmits<{

// }>()

</script>

<style lang="scss" scoped>
.product-card {
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;

    .card-header {
        background-color: var(--background-main-color);
        padding: 20px 20px 0 20px;

        .product-code {
            margin-bottom: 40px;

            .label {
                color: var(--text-sub-color);
                font-size: 18px;
                font-weight: 400;
            }

            .code {
                font-weight: 700;
                font-size: 32px;
                line-height: 38px;
                color: var(--main-color);
            }
        }
    }

    .card-body {
        height: 100%;
        flex-grow: 1;
    }
}
</style>