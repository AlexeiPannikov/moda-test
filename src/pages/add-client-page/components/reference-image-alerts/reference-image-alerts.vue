<template>
    <add-client-component-template>
        <template #title>
            Reference Image Alerts
        </template>

        <span class="text-text-secondary w-75 mt-5">By adding alerts, your users will be notified when they work on a
            product where relevant visual references
            exist from your already produced assets.
            You can add multiple alerts and sort them by priority. If your 1st priority filter has no match the system
            will look for a result from the 2nd filter and continue this way.</span>

        <scroll-box-2 class="mb-9">
            <input-with-label v-for="item in rulesGroupList" :key="item.id" :label="item.name" class="mt-9">
                <draggable tag="div" :list="item.sortedRulesList" class="list-group" handle=".handle"
                    item-key="positionNumber" @change="sort">
                    <template #item="{ element }">
                        <rule-item :item="element" @onRemove="removeRule"></rule-item>
                    </template>
                </draggable>
                <button-white @click="openAddAlertModal(item.id)">ADD RULE</button-white>
            </input-with-label>
        </scroll-box-2>
    </add-client-component-template>

    <reference-image-alerts-modal :is-open="isOpenModal" @close="isOpenModal = false" @save="save" @cancel="cancel">
    </reference-image-alerts-modal>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from '../add-client-component-template.vue';
import { computed, reactive, ref } from '@vue/reactivity';
import ReferenceImageAlertsModal from './reference-image-alerts-modal.vue';
import InputWithLabel from '@components/input-with-label/input-with-label.vue';
import ButtonWhite from '@/components/buttons/button-white.vue';
import ScrollBox2 from '@/components/scroll-box/scroll-box-2.vue';
import { RulesGroup } from './RulesGroup';
import { RuleModel } from './RuleModel';
import RuleItem from './rule-item.vue';
import draggable from 'vuedraggable'

const isOpenModal = ref(false)

let currentGroupId = ref(null)

const rulesGroupList = reactive([
    new RulesGroup({
        id: 1,
        name: 'PHOTOGRAPHY',
        rulesList: new Array<RuleModel>()
    }),
    new RulesGroup({
        id: 2,
        name: 'EXTERNAL POST QC',
        rulesList: new Array<RuleModel>()
    }),
    new RulesGroup({
        id: 3,
        name: 'INTERNAL POST',
        rulesList: new Array<RuleModel>()
    }),
    new RulesGroup({
        id: 4,
        name: 'INTERNAL POST QC',
        rulesList: new Array<RuleModel>()
    }),
])

const rulesGroup = computed(() => {
    return rulesGroupList.find(item => item.id === currentGroupId.value)
})

const openAddAlertModal = (id: number) => {
    currentGroupId.value = id
    isOpenModal.value = true
}

const cancel = () => {
    isOpenModal.value = false
}

const sort = ({ moved: { element, newIndex, oldIndex } }: any) => {
    // const rulesList = rulesGroup.value.rulesList;
    // element.positionNumber = newIndex;
    // [rulesList[oldIndex], rulesList[newIndex]] = [
    //     rulesList[newIndex],
    //     rulesList[oldIndex],
    // ];
    // rulesList.forEach((item, i) => {
    //     item.positionId = i;
    // });
}

const save = (data: RuleModel) => {
    isOpenModal.value = false
    rulesGroup.value.rulesList.push(data)
    rulesGroup.value.setPositionId()
}

const removeRule = (id: number) => {
    rulesGroup.value.rulesList = rulesGroup.value.rulesList.filter(item => item.positionId !== id)
}


</script>

<style lang="scss" scoped>
</style>