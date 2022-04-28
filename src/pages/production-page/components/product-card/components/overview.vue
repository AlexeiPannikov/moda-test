<template>
    <div class="overview">
        <div class="overview-items-wrap">

            <div class="overview-items">
                <component v-for="(item, idx) in OverviewList.fullList" :key="idx" :is="item.component" :item="item" />
            </div>

            <div class="filter">
                <img src="@assets/icons/filter.svg" alt="filter">
            </div>
        </div>

        <div class="table">
            <ui-table :table-model="table" :table-styles="tableStyles">
                <template #header>
                    <table-header-item :styles="tableHeaderItemStyles">STEP</table-header-item>
                    <table-header-item :styles="tableHeaderItemStyles">STATUS</table-header-item>
                    <table-header-item :styles="tableHeaderItemStyles">TEAM MEMBER</table-header-item>
                    <table-header-item :styles="tableHeaderItemStyles">DATE</table-header-item>
                    <table-header-item :styles="tableHeaderItemStyles">TIME</table-header-item>
                </template>

                <template #item="data">
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.client }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.code }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.name }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.name }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.name }}</table-body-item>
                </template>
            </ui-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BodyRowModel } from '@/components/ui-table/models/BodyRowModel';
import { TableModel } from '@/components/ui-table/models/TableModel';
import { reactive } from '@vue/reactivity';
import UiTable from '@/components/ui-table/ui-table.vue';
import TableHeaderItem from '@/components/ui-table/table-header-item.vue';
import TableBodyItem from '@/components/ui-table/table-body-item.vue';
import OverviewList from './OverviewList'
import { TableStylesModel } from '@/components/ui-table/models/TableStylesModel';

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
        ],
    })
);

const tableStyles = new TableStylesModel({
    headerStyles: {
        gridTemplateColumns: 'repeat(5, 1fr)',
    },
    tableStyle: {
        background: '#F5F5F5',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '0 20px',
        marginTop: '20px',
    },
    rowStyles: {
        gridTemplateColumns: 'repeat(5, 1fr)',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        width: '100%',
        backgroundColor: 'transparent',
    }
})

const tableHeaderItemStyles = {
    width: '100%',
    color: 'var(--text-sub-color)',
    fontSize: '16px',
    fontWeight: '500',
    minWidth: 'max-content',
    display: 'flex',
    alignItems: 'center',
    padding: '25px 0 15px 0',
}

const tableBodyItemStyle = {
    width: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: 'var(--text-main-color)',
    padding: '15px 0'
}

</script>

<style lang="scss" scoped>
.overview {
    background-color: white;
    padding: 20px;

    .overview-items-wrap {
        display: flex;
        justify-content: space-between;

        &:deep() .overview-item:not(:first-child) {
            margin-top: 20px;
        }

        .filter {
            img {
                cursor: pointer;
            }
        }
    }
}
</style>