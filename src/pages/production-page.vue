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
                <ui-table :table-model="table">
                    <template #header>
                        <table-header-item>Client</table-header-item>
                        <table-header-item>Job Code</table-header-item>
                        <table-header-item>Job Name</table-header-item>
                    </template>

                    <template #item="data">
                        <table-body-item>{{ data.item.name }}</table-body-item>
                    </template>
                </ui-table>
            </section>

            <!-- product detail -->
            <section class="product-section">
            </section>
        </div>
    </page-template>
</template>

<script lang="ts" setup>
import PageTemplate from "@components/page-template/page-template.vue"
import UiTabs from "@components/ui-tabs/ui-tabs.vue"
import TabItem from "@components/ui-tabs/tab-item.vue"
import UiTable from "@components/ui-table/ui-table.vue"
import TableHeaderItem from "@components/ui-table/table-header-item.vue"
import TableBodyItem from "@components/ui-table/table-body-item.vue"
import { TabsModel } from "@components/ui-tabs/TabsModel"
import { reactive } from "@vue/reactivity";
import { TabItemModel } from "@/components/ui-tabs/TabItemModel";
import { TableModel } from "@/components/ui-table/models/TableModel";
import { BodyRowModel } from "@/components/ui-table/models/BodyRowModel";
import { BodyItemModel } from "@/components/ui-table/models/BodyItemModel";

const tabs = reactive(new TabsModel({
    tabList: [
        new TabItemModel({ id: 1, name: 'IN PROGRESS' }),
        new TabItemModel({ id: 2, name: 'TO DO' }),
        new TabItemModel({ id: 3, name: 'REJECTED' }),
    ]
}))

const tabClickHandler = (value: TabItemModel<any>) => {
    tabs.setActiveTab(value.id)
}

const table = reactive(new TableModel({
    bodyRows: [
        new BodyRowModel({
            id: 1,
            items: [
                new BodyItemModel({ id: 1, name: 'Amazon Fashion' }),
                new BodyItemModel({ id: 2, name: '221 DONNA E-COM LIQUID PAISLEYaaaaaaaaaaaaaaaaaaaa' }),
                new BodyItemModel({ id: 3, name: '221 UOMO E-COM SFILATA PR' }),
            ]
        }),
        new BodyRowModel({
            id: 2,
            items: [
                new BodyItemModel({ id: 1, name: 'Amazon Fashion' }),
                new BodyItemModel({ id: 2, name: 'Shoot on 15/03' }),
                new BodyItemModel({ id: 3, name: '221 UOMO E-COM SFILATA PR' }),
            ]
        }),
        new BodyRowModel({
            id: 3,
            items: [
                new BodyItemModel({ id: 1, name: 'Amazon Fashion' }),
                new BodyItemModel({ id: 2, name: '221 DONNA E-COM LIQUID PAISLEY' }),
                new BodyItemModel({ id: 3, name: '221 UOMO E-COM SFILATA PR' }),
            ]
        }),
    ]
}))
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