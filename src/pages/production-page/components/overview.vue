<template>
    <div class="overview">
        <teleport to="body">
            <v-navigation-drawer class="w-50 h-100 mt-0 pt-5" style="z-index: 5000" v-model="drawer" absolute temporary>
                <v-container class="h-100 d-flex flex-column">
                    <v-row class="flex-grow-1" no-gutters>
                        <v-col class="d-flex flex-column mr-2">
                            <div class="text-primary text-h5 mb-2 font-weight-bold">
                                AVAILABLE TO DISPLAY
                            </div>
                            <v-card class="flex-grow-1 rounded-0 px-3 pt-3" flat border="1">
                                <ui-search v-model="searchText" />
                                <div class="item-group mt-5" v-for="[title, group] in Object.entries(OverviewList)"
                                    :key="title">
                                    <div v-if="(group as Array<OverviewItemModel>).length"
                                        class="item-group-title font-weight-bold">
                                        {{ title.toLocaleUpperCase() }}
                                    </div>
                                    <div v-for="item in getFilteredBySearch(group as Array<OverviewItemModel>)"
                                        :key="(item as OverviewItemModel).id">
                                        <v-checkbox class="ui-checkbox" :label="(item as OverviewItemModel).label"
                                            v-model="(item as OverviewItemModel).isChecked" color="primary"
                                            hide-details />
                                    </div>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col class="d-flex flex-column">
                            <div class="text-primary text-h5 mb-2 font-weight-bold">
                                SELECTED TO DISPLAY ({{ OverviewList.selectedItemNumber }})
                            </div>
                            <v-card class="flex-grow-1 rounded-0 px-3 pt-3" flat border="1">
                                <draggable tag="div" :list="OverviewList.selectedItems" class="list-group"
                                    handle=".handle" item-key="positionNumber" @change="sort">
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
                <component v-for="(item, idx) in OverviewList.fullList" :key="idx" v-show="item.isVisible" :is="item.component" :item="item" />
            </div>

            <v-btn @click="drawer = !drawer" class="text-text-secondary" icon="mdi-tune-vertical" flat height="24"
                width="24" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import OverviewList from "./OverviewList";
import ButtonBlue from "@components/buttons/button-blue.vue";
import ButtonWhite from "@components/buttons/button-white.vue";
import UiSearch from "@components/ui-search/ui-search.vue";
import draggable from "vuedraggable";
import { OverviewItemModel } from "./OverviewItemModel"
import { ref } from "@vue/reactivity";

const drawer = ref(false);

const drag = ref(false);

const searchText = ref("")

const getFilteredBySearch = (arr: OverviewItemModel[]) => {
    const lowerCaseText = searchText.value.toLocaleLowerCase()
    if (!lowerCaseText) {
        return arr
    }
    return arr.filter(item => {
        return item.label.toLocaleLowerCase().includes(lowerCaseText)
    })
}

const sort = ({ moved: { element, newIndex, oldIndex } }: any) => {
    let selectedList = OverviewList.selectedItems
    element.positionNumber = newIndex + 1;
    [selectedList[oldIndex], selectedList[newIndex]] = [
        selectedList[newIndex],
        selectedList[oldIndex],
    ];
    selectedList.forEach((item, i) => {
        item.positionNumber = i + 1;
    });
    console.log(selectedList);
};

const removeFromSelected = (id: number) => {
    OverviewList.selectedItems.forEach((item) => {
        item.isChecked = item.id !== id;
    });
};

const cancel = () => {
    drawer.value = false;
};

const update = () => {
    OverviewList.updateVisible();
    drawer.value = false;
};
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
