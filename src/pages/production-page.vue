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
      <section class="product-section"></section>
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
import { BodyItemModel } from "@/components/ui-table/models/BodyItemModel";
import router from "@/router/router";

const tabs = reactive(
  new TabsModel({
    tabList: [
      new TabItemModel({ id: 1, name: "IN PROGRESS", isActive: true }),
      new TabItemModel({ id: 2, name: "TO DO" }),
      new TabItemModel({ id: 3, name: "REJECTED" }),
    ],
  })
);

const tabClickHandler = (value: TabItemModel<any>) => {
  tabs.setActiveTab(value.id);
  const go = (paramName: string) => {
    router.push({ name: "production", params: { type: paramName } });
  };
  if (value.id === 1) {
    go("in-progress");
  }
  if (value.id === 2) {
    go("to-do");
  }
  if (value.id === 3) {
    go("rejected");
  }
};

const table = reactive(
  new TableModel({
    bodyRows: [
      new BodyRowModel({
        id: 1,
        item: {
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        id: 2,
        item: {
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        id: 3,
        item: {
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
    ],
  })
);

const rowClickHandler = (data: any) => {
  console.log(data);
};
</script>

<style lang="scss" scoped>
.production-page-content {
  display: flex;

  .table-section {
    flex: 1 1 45%;
  }

  .product-section {
    flex: 1 1 55%;
  }
}
</style>