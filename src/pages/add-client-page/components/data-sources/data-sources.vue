<template>
    <add-client-component-template>
        <template #title>
            Data Sources
            <button-green @click="openAddDataSourcesModal" class="ml-2">ADD</button-green>
        </template>

        <ui-table :is-scroll-on="true" :scroll-height="null" :table-model="table" :table-styles="tableStyles">
            <template #header>
                <table-header-item :styles="tableHeaderItemStyles">DELIVERY OPTION NAME</table-header-item>
                <table-header-item :styles="tableHeaderItemStyles">STATUS</table-header-item>
                <table-header-item :styles="tableHeaderItemStyles">METHOD</table-header-item>
            </template>

            <template #item="data">
                <table-body-item :styles="tableBodyItemStyle">{{ data.item.name }}</table-body-item>
                <table-body-item :styles="tableBodyItemStyle">{{ data.item.status }}</table-body-item>
                <table-body-item :styles="tableBodyItemStyle">{{ data.item.method }}</table-body-item>
            </template>
        </ui-table>
    </add-client-component-template>

    <add-data-sources-modal :is-open="isOpenModal" @close="isOpenModal = false" @save="save" @cancel="cancel">
    </add-data-sources-modal>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from '../add-client-component-template.vue';
import ButtonGreen from '@components/buttons/button-green.vue';
import AddDataSourcesModal from './add-data-sources-modal.vue';
import { reactive, ref } from '@vue/reactivity';
import { TableStylesModel } from '@components/ui-table/models/TableStylesModel';
import UiTable from '@components/ui-table/ui-table.vue';
import TableHeaderItem from '@/components/ui-table/table-header-item.vue';
import TableBodyItem from '@/components/ui-table/table-body-item.vue';
import { BodyRowModel } from '@/components/ui-table/models/BodyRowModel';
import { TableModel } from '@/components/ui-table/models/TableModel';

const isOpenModal = ref(false)

const table = reactive(
    new TableModel({
        bodyRows: [
            new BodyRowModel({
                item: {
                    id: 0,
                    name: 'TEST',
                    status: 'WORKING',
                    method: 'FTP'
                },
            }),
            new BodyRowModel({
                item: {
                    id: 1,
                    name: 'TEST',
                    status: 'WORKING',
                    method: 'FTP'
                },
            }),
            new BodyRowModel({
                item: {
                    id: 2,
                    name: 'TEST',
                    status: 'WORKING',
                    method: 'FTP'
                },
            }),
            new BodyRowModel({
                item: {
                    id: 3,
                    name: 'TEST',
                    status: 'WORKING',
                    method: 'FTP'
                },
            }),
        ],
    })
);

const tableStyles = new TableStylesModel({
    headerStyles: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2px',
        borderBottom: '1px solid #DEDEDE',
        padding: '7px 0 7px 7px'
    },
    tableStyle: {
        height: '100%',
    },
    rowStyles: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2px',
        width: '100%',
        backgroundColor: 'transparent',
        transition: 'background-color 0.15s linear',
        position: 'relative',
        zIndex: 2,
        padding: '7px 0 7px 7px'
    },
})

const tableHeaderItemStyles = {
    width: '100%',
    backgroundColor: 'transparent',
    color: 'rgb(var(--v-theme-text-secondary))',
    fontSize: '16px',
    fontWeight: '400',
    minWidth: 'max-content',
    display: 'flex',
    alignItems: 'center',
}

const tableBodyItemStyle = {
    width: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: 'rgb(var(--v-theme-text-primary))',
}

const openAddDataSourcesModal = () => {
    isOpenModal.value = true
}

const save = () => {
    isOpenModal.value = false
}

const cancel = () => {
    isOpenModal.value = false
}
</script>

<style lang="scss" scoped>
</style>