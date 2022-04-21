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


    </div>
</template>

<script lang="ts" setup>
import { ProductModel } from './ProductModel';
import UiTabs from '@components/ui-tabs/ui-tabs.vue'
import TabItemSlider from '@components/ui-tabs/tab-item-slider.vue'
import { reactive } from '@vue/reactivity';
import { TabItemModel } from '@/components/ui-tabs/TabItemModel';
import { TabsModel } from '@/components/ui-tabs/TabsModel';
import { useRoute, useRouter } from 'vue-router';
import productionPageVue from '../../production-page.vue';
import { onMounted, onUpdated } from 'vue';


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
            new TabItemModel({ id: 1, name: "Overview" }),
            new TabItemModel({ id: 2, name: "Styling" }),
            new TabItemModel({ id: 3, name: "Samples" }),
            new TabItemModel({ id: 3, name: "Assets" }),
        ],
    })
);

const tabClickHandler = (tab: TabItemModel<any>) => {
    tabs.tabPushRouter(router, route.name.toString(), tab, { name: "prod", payload: tab.name })
}

onMounted(() => {
    tabs.setActiveTabByQuery('name', route.params.prod as string)
})

onUpdated(() => {
    tabs.setActiveTabByQuery('name', route.params.prod as string)
})

// const emit = defineEmits<{

// }>()

</script>

<style lang="scss" scoped>
.product-card {
    background-color: white;

    .card-header {
        background-color: var(--background-main-color);
        padding: 20px;

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
}
</style>