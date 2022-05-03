<template>
    <div class="overview">
        <teleport to="body">
            <v-navigation-drawer class="w-50" v-model="drawer" absolute temporary>
                <v-container class="h-100 d-flex flex-column">
                    <v-row class="flex-grow-1" no-gutters>
                        <v-col class="d-flex flex-column mr-2">
                            <div class="text-primary text-h5 mb-2 font-weight-bold">AVAILABLE TO DISPLAY</div>
                            <v-card class="flex-grow-1 rounded-0 px-3 pt-3" flat border="1">
                                <ui-search />
                                <div class="item-group mt-5" v-for="[title, group] in Object.entries(OverviewList)"
                                    :key="title">
                                    <div v-if="group.length" class="item-group-title font-weight-bold">{{
                                            title.toLocaleUpperCase()
                                    }}</div>
                                    <div v-for="item in group" :key="item.positionNumber">
                                        <v-checkbox class="ui-checkbox" :label="item.label" v-model="item.isChecked"
                                            color="primary" hide-details />
                                    </div>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col class="d-flex flex-column">
                            <div class="text-primary text-h5 mb-2 font-weight-bold">SELECTED TO DISPLAY
                                ({{ OverviewList.selectedItemNumber }})</div>
                            <v-card class="flex-grow-1 rounded-0 px-3 pt-3" flat border="1">
                                <draggable tag="div" :list="OverviewList.selectedItems" class="list-group"
                                    handle=".handle" item-key="positionNumber">
                                    <template #item="{ element }">
                                        <div class="d-flex">
                                            <v-icon class="handle pointer" color="text-secondary">mdi-drag</v-icon>
                                            <span class="text">{{ element.label }} </span>
                                            <v-spacer />
                                            <v-icon class="pointer" color="text-secondary"
                                                @click="removeFromSelected(element.id)">
                                                mdi-delete-outline</v-icon>
                                        </div>
                                    </template>
                                </draggable>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row class="flex-grow-0 mt-4 mb-5" no-gutters>
                        <v-spacer />
                        <button-white @click="cancel" class="mr-2">Cancel</button-white>
                        <button-blue @click="update">Update</button-blue>
                    </v-row>
                </v-container>
            </v-navigation-drawer>
        </teleport>

        <div class="overview-items-wrap">

            <div class="overview-items">
                <component v-for="(item, idx) in OverviewList.fullList" :key="idx" :is="item.component" :item="item" />
            </div>

            <v-btn @click="drawer = !drawer" class="text-text-secondary" icon="mdi-tune-vertical" flat height="24"
                width="24" />
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
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.step }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">
                        <product-status :status="data.item.status" />
                    </table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.teamMember }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.date }}</table-body-item>
                    <table-body-item :styles="tableBodyItemStyle">{{ data.item.time }}</table-body-item>
                </template>
            </ui-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BodyRowModel } from '@/components/ui-table/models/BodyRowModel';
import { TableModel } from '@/components/ui-table/models/TableModel';
import { reactive, ref } from '@vue/reactivity';
import UiTable from '@/components/ui-table/ui-table.vue';
import TableHeaderItem from '@/components/ui-table/table-header-item.vue';
import TableBodyItem from '@/components/ui-table/table-body-item.vue';
import OverviewList from './OverviewList'
import { TableStylesModel } from '@/components/ui-table/models/TableStylesModel';
import ProductStatus from '@/components/product-status/product-status.vue';
import ButtonBlue from '@components/buttons/button-blue.vue';
import ButtonWhite from '@components/buttons/button-white.vue';
import UiSearch from '@components/ui-search/ui-search.vue';
import draggable from 'vuedraggable'

const drawer = ref(false)

const drag = ref(false)

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
        position: 'relative'
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
    padding: '15px 10px 15px 0',
    fontSize: '16px'
}

const removeFromSelected = (id: number) => {
    OverviewList.selectedItems.forEach(item => {
        item.isChecked = item.id !== id
    })
}

const cancel = () => {
    drawer.value = false
}

const update = () => {
    OverviewList.updateVisible()
    drawer.value = false
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

.pointer {
    cursor: pointer;
}

.ui-checkbox {
    &:deep().v-selection-control {
        height: 30px !important;
    }

    &:deep().v-label {
        color: rgb(var(--v-theme-text-primary)) !important;
        opacity: 1 !important;
    }

    &:deep().v-selection-control__input,
    &:deep().v-selection-control__wrapper {
        width: 24px !important;
        margin-right: 7px;
    }
}
</style>