<template>
    <modal-window-template :isOpen="props.isOpen" @save="saveAlertRules">
        <template #header>
            Add Alert
        </template>
        <div class="mb-8 text-text-secondary">Alert the user when working on a product where image assets exists with
            the
            same:</div>
        <div>
            <ui-checkbox v-for="item in sources" :id="item.id" :label="item.label" v-model="item.isChecked">
            </ui-checkbox>
            <input-with-label class="mt-8" label="PRODUCTION TYPE">
                <ui-dropdown v-model="productionType" :items="productionTypes" placeholder="Select">
                </ui-dropdown>
            </input-with-label>
        </div>
    </modal-window-template>
</template>

<script lang="ts" setup>
import ModalWindowTemplate from "../modal-window-template.vue"
import InputWithLabel from '@components/input-with-label/input-with-label.vue';
import UiDropdown from '@components/ui-dropdown/ui-dropdown.vue'
import { reactive, ref } from "vue";
import { DropdownItemModel } from "@components/ui-dropdown/DropdownItemModel";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import ScrollBox2 from '@components/scroll-box/scroll-box-2.vue';
import { RuleModel } from "./RuleModel";


interface IProps {
    isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
})

const emit = defineEmits<{
    (e: 'save', data: RuleModel): void
}>()

const productionType = ref(null)

const sources = reactive([
    { id: 1, label: 'Style code', isChecked: false },
    { id: 2, label: 'Category', isChecked: false },
    { id: 3, label: 'Product code', isChecked: false },
    { id: 4, label: 'Job code', isChecked: false },
])

const productionTypes = reactive([
    new DropdownItemModel({ id: 1, name: 'Any Production Type', value: 'Any Production Type' }),
    new DropdownItemModel({ id: 2, name: 'On Model', value: 'On Model' }),
    new DropdownItemModel({ id: 3, name: 'Mannequin', value: 'Mannequin' }),
    new DropdownItemModel({ id: 4, name: 'Flats', value: 'Flats' }),
    new DropdownItemModel({ id: 5, name: 'Overhead', value: 'Overhead' }),
    new DropdownItemModel({ id: 6, name: 'Tabletop', value: 'Tabletop' }),
    new DropdownItemModel({ id: 7, name: 'Pin', value: 'Pin' }),
    new DropdownItemModel({ id: 8, name: 'SPB', value: 'SPB' }),
    new DropdownItemModel({ id: 9, name: 'Hanger', value: 'Hanger' }),
])

const saveAlertRules = () => {   
    emit('save', new RuleModel({
        sources: sources.filter(item => item.isChecked).map(item => { return item.label }),
        productionType: productionType.value
    }))
}
</script>

<style lang="scss" scoped>
</style>