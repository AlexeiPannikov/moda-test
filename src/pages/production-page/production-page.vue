<template>
  <page-template>
    <!-- Toolbar -->
    <template #toolbar>
      <ui-tabs :tabs="tabs">
        <template #default="data">
          <tab-item :item="data.item" @click="tabClickHandler" />
        </template>
      </ui-tabs>
    </template>

    <!-- Main content -->
    <div class="production-page-content">
      <!-- products table -->
      <section class="table-section">
        <ui-table :table-model="table" @on-row-click="rowClickHandler">
          <template #header>
            <table-header-item>Client</table-header-item>
            <table-header-item>Job Code</table-header-item>
            <table-header-item>Job Name</table-header-item>
          </template>

          <template #item="data">
            <table-body-item>{{ data.item.client }}</table-body-item>
            <table-body-item>{{ data.item.code }}</table-body-item>
            <table-body-item>{{ data.item.name }}</table-body-item>
          </template>
        </ui-table>
      </section>

      <!-- product detail -->
      <section class="product-section">
        <product-card :product="product"></product-card>
      </section>
    </div>
  </page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/page-template/page-template.vue";
import UiTabs from "@components/ui-tabs/ui-tabs.vue";
import TabItem from "@components/ui-tabs/tab-item.vue";
import UiTable from "@components/ui-table/ui-table.vue";
import TableHeaderItem from "@components/ui-table/table-header-item.vue";
import TableBodyItem from "@components/ui-table/table-body-item.vue";
import { TabsModel } from "@components/ui-tabs/TabsModel";
import { reactive } from "@vue/reactivity";
import { TabItemModel } from "@/components/ui-tabs/TabItemModel";
import { TableModel } from "@/components/ui-table/models/TableModel";
import { BodyRowModel } from "@/components/ui-table/models/BodyRowModel";
import { useRoute, useRouter } from "vue-router";
import { onMounted, onUpdated } from "vue";
import ProductCard from "./components/product-card/product-card.vue";
import { ProductModel } from "./components/product-card/ProductModel";

const route = useRoute()
const router = useRouter()

const tabs = reactive(
  new TabsModel({
    tabList: [
      new TabItemModel({ id: 1, name: "IN PROGRESS", path: 'in-progress' }),
      new TabItemModel({ id: 2, name: "TO DO", path: 'to-do' }),
      new TabItemModel({ id: 3, name: "REJECTED", path: 'rejected' }),
    ],
  })
);

const table = reactive(
  new TableModel({
    bodyRows: [
      new BodyRowModel({
        item: {
          id: 1,
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: 2,
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: 3,
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
    ],
  })
);

const product = reactive(new ProductModel({
  code: 'B08MY774GF',
  jobCode: 'Kelvin testing',
  productName: 'PUMA Boys Placed Logo Boxer Baby and Toddler Underwear Set, red Combo, 152',
  productionType: 'Pin',
  styleGuide: 'Men - Woman Oversize MULTIPACKS PIN'
}))

const initState = () => {
  tabs.setActiveTabByPath(route.params.type as string)
  table.setActiveRow(Number(route.query.id))
}

onMounted(() => {
  initState()
})

onUpdated(() => {
  initState()
})

const tabClickHandler = (tab: TabItemModel<any>) => {
  router.push({ name: 'production', params: { type: tab.path } })
}

const rowClickHandler = (data: any) => {
  router.push({ name: 'production', query: { ...route.query, id: data.id } })
};
</script>

<style lang="scss" scoped>
.production-page-content {
  display: flex;

  .table-section,
  .product-section {
    box-shadow: var(--shadow);
  }

  .table-section {
    flex: 1 1 45%;
    margin-right: 15px;
  }

  .product-section {
    flex: 1 1 55%;
    background-color: white;
  }
}
</style>