<template>
    <ui-table :table-model="table" :table-styles="tableStyles">
        <template #header>
            <table-header-item :styles="tableHeaderItemStyles">STEP</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">STATUS</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">TEAM MEMBER</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">DATE</table-header-item>
            <table-header-item :styles="tableHeaderItemStyles">TIME</table-header-item>
        </template>

        <template #item="data">
            <table-body-item :styles="tableBodyItemStyle">{{
                    data.item.step
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">
                <product-status :status="data.item.status" />
            </table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
                    data.item.teamMember
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
                    data.item.date
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
                    data.item.time
            }}</table-body-item>
        </template>
    </ui-table>
</template>

<script lang="ts" setup>
import { BodyRowModel } from "@/components/ui-table/models/BodyRowModel";
import { TableModel } from "@/components/ui-table/models/TableModel";
import { reactive } from "@vue/reactivity";
import UiTable from "@/components/ui-table/ui-table.vue";
import TableHeaderItem from "@/components/ui-table/table-header-item.vue";
import TableBodyItem from "@/components/ui-table/table-body-item.vue";
import { TableStylesModel } from "@/components/ui-table/models/TableStylesModel";
import ProductStatus from "@/components/product-status/product-status.vue";

const table = reactive(
    new TableModel({
        bodyRows: [
            new BodyRowModel({
                item: {
                    id: 1,
                    step: "Amazon Fashion",
                    status: 1,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 2,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 3,
                    step: "Amazon Fashion",
                    status: 3,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 4,
                    step: "Amazon Fashion",
                    status: 1,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 5,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 5,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 5,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 5,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
            new BodyRowModel({
                item: {
                    id: 5,
                    step: "Amazon Fashion",
                    status: 2,
                    teamMember: "Asistant: Fabio Loparco",
                    date: "03/18/2022",
                    time: "3:19 PM",
                },
            }),
        ],
    })
);

const tableStyles = new TableStylesModel({
    headerStyles: {
        gridTemplateColumns: "repeat(5, 1fr)",
    },
    tableStyle: {
        background: "#F5F5F5",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        padding: "0 20px",
        marginTop: "20px",
    },
    rowStyles: {
        gridTemplateColumns: "repeat(5, 1fr)",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        width: "100%",
        backgroundColor: "transparent",
        position: "relative",
    },
});

const tableHeaderItemStyles = {
    width: "100%",
    color: "var(--text-sub-color)",
    fontSize: "16px",
    fontWeight: "500",
    minWidth: "max-content",
    display: "flex",
    alignItems: "center",
    padding: "25px 0 15px 0",
};

const tableBodyItemStyle = {
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    color: "var(--text-main-color)",
    padding: "15px 10px 15px 0",
    fontSize: "16px",
};

</script>

<style lang="scss" scoped>
</style>
