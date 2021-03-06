<template>
    <v-container class="d-flex flex-column h-100">
        <v-row class="pt-5 flex-grow-0 table-tabs" no-gutters>
            <v-col>
                <v-tabs class="tabs w-100" slider-color="primary" hide-slider density="comfortable">
                    <v-tab :to="{ name: 'production', params: { type: 'in-progress' } }">
                        IN PROGRESS
                    </v-tab>
                    <v-tab :to="{ name: 'production', params: { type: 'to-do' } }">
                        TO DO
                    </v-tab>
                    <v-tab :to="{ name: 'production', params: { type: 'rejected' } }">
                        REJECTED
                    </v-tab>
                </v-tabs>
            </v-col>

            <v-col class="d-flex justify-end align-end">
                <div class="filter-tools d-flex">
                    <div class="filter d-flex align-center mr-5" style="cursor: pointer">
                        <img class="mr-2" :src="FilterIcon">
                        Filter
                    </div>
                    <ui-small-search v-model="searchText"></ui-small-search>
                </div>
            </v-col>
        </v-row>
        <v-row class="flex-grow-1 mt-5 bottom-row" no-gutters>
            <v-col class="mr-5 h-100">
                <v-card class="h-100">
                    <ui-table :is-scroll-on="true" :scroll-height="null" :table-model="table"
                        :table-styles="tableStyles" :is-scroll-left="true" @on-row-click="rowClickHandler">
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
                </v-card>
            </v-col>
            <v-col class="d-flex">
                <v-card class="flex-grow-1 d-flex flex-column">
                    <v-card-header>
                        <div>
                            <div class="mb-1 text-text-secondary">
                                Product-code
                            </div>
                            <div class="text-h4 mb-5 text-primary">
                                B09695J33J
                            </div>
                        </div>
                    </v-card-header>

                    <v-card-actions>
                        <v-tabs class="tabs w-100" slider-color="primary" density="comfortable">
                            <v-tab v-for="item in cardTabs" :key="item" @click="currentTab = item">
                                {{ item }}
                            </v-tab>
                        </v-tabs>
                    </v-card-actions>

                    <div class="card-content-wrap">
                        <scroll-box-2>
                            <component :is="(components as any)[currentTab]" />
                        </scroll-box-2>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { BodyRowModel } from '@/components/ui-table/models/BodyRowModel';
import { TableModel } from '@/components/ui-table/models/TableModel';
import { TableStylesModel } from '@/components/ui-table/models/TableStylesModel';
import UiTable from "@components/ui-table/ui-table.vue"
import TableHeaderItem from "@components/ui-table/table-header-item.vue"
import TableBodyItem from "@components/ui-table/table-body-item.vue"
import { onMounted, reactive, ref, shallowRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Overview from "./components/overview.vue"
import FilterIcon from "@assets/icons/filter.svg"
import scrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import UiSmallSearch from '@/components/ui-search/ui-small-search.vue';


const router = useRouter()
const route = useRoute()

const currentTab = ref('Overview');

const components = {
    Overview
}

const searchText = ref("")

const isOpenSearch = ref(false)

const cardTabs = [
    "Overview",
    "Styles",
    "Samples",
    "Assets",
]

const closeSearch = () => {
    if (!searchText.value) {
        isOpenSearch.value = false;
    }
}

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
        backgroundColor: 'rgb(var(--v-theme-primary))',
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

onMounted(() => {
    if (route.query.id) {
        table.setActiveRow(route.query.id as string)
    }
})

const rowClickHandler = (data: any) => {
    router.push({ name: 'production', params: { type: route.params.type }, query: { ...route.query, id: data.id } })
}

// const cardTabClickHandler = (data: string) => {
//     router.push({ name: 'production', params: { type: route.params.type }, query: { ...route.query, action: data } })
// }
</script>

<style lang="scss" scoped>
.card-content-wrap {
    max-height: 100%;
    flex-grow: 1;
}

.table-tabs {
    .v-tab--selected {
        background-color: rgb(var(--v-theme-primary));
        color: white !important;
    }

    .v-tab {
        border-radius: 15px !important;
        font-size: 22px;
        color: rgb(var(--v-theme-primary));
    }
}

.bottom-row {
    max-height: calc(100% - 80px);
}
</style>