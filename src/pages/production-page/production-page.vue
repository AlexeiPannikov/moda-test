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
        <ui-table :is-scroll-on="true" :scroll-height="null" :table-model="table" :table-styles="tableStyles"
          @on-row-click="rowClickHandler">
          <template #header>
            <table-header-item :styles="tableHeaderItemStyles">Client</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">Job Code</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">Job Name</table-header-item>
          </template>

          <template #item="data">
            <table-body-item :styles="tableBodyItemStyle">{{ data.item.client }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{ data.item.code }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{ data.item.name }}</table-body-item>
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
import { TableStylesModel } from "@/components/ui-table/models/TableStylesModel";

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
          id: 'B08MY774GF',
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: 'ECYF689TGT',
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY567W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG345YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG88YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GT990GYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW485257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW257232",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "23584GTGYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW012257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY23450W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234G5347TGYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG622YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW252357",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW7809257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG674YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234G568TGYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW6789257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW012257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY355W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW6342257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG234YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY5677W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234G43634TGYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY34666W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GT6788YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTG900YW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGY0065W257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GT45768GYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GT3657GYW257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
      new BodyRowModel({
        item: {
          id: "234GTGYW7978257",
          client: "Amazon Fashion",
          code: "Shoot on 15/03",
          name: "221 UOMO E-COM SFILATA PR",
        },
      }),
    ],
  })
);

const tableStyles = new TableStylesModel({
  headerStyles: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2px',
    padding: '2px',
  },
  tableStyle: {
    height: '100%',
  },
  rowStyles: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    padding: '10px 5px 8px 10px',
    width: '100%',
    backgroundColor: 'transparent',
    transition: 'background-color 0.15s linear',
    position: 'relative',
    zIndex: 2,
  },
  activeRowStyles: {
    backgroundColor: 'var(--main-color)',
    color: 'white',
  },
  hoverRowStyles: {
    backgroundColor: '#f3f3f3',
  }
})

const tableHeaderItemStyles = {
  width: '100%',
  backgroundColor: '#dedede',
  color: 'black',
  fontSize: '18px',
  fontWeight: '500',
  minWidth: 'max-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px',
}

const tableBodyItemStyle = {
  width: '100%',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: 'var(-text-main-color)',
  paddingLeft: '20px',
}

const product = reactive(new ProductModel({
  code: 'B08MY774GF',
  jobCode: 'Kelvin testing',
  productName: 'PUMA Boys Placed Logo Boxer Baby and Toddler Underwear Set, red Combo, 152',
  productionType: 'Pin',
  styleGuide: 'Men - Woman Oversize MULTIPACKS PIN'
}))

const initState = () => {
  tabs.setActiveTabByPath(route.params.type as string)
  table.setActiveRow(route.query.id as string)
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
  height: 100%;
  max-height: 100%;

  .table-section,
  .product-section {
    box-shadow: var(--shadow);
    height: 100%;
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