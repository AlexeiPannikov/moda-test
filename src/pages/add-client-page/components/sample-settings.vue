<template>
    <add-client-component-template>
        <template #title>
            Sample Settings
        </template>
        <v-row no-gutters>
            <v-col cols="6">
                <input-with-label class="mt-9 w-75" label="POOL SAMPLES">
                    <div class="text-text-secondary">When enabled, products imported on two different jobs will share
                        samples.</div>
                    <ui-switch label="Enabled"></ui-switch>
                </input-with-label>
                <input-with-label class="mt-9 w-75" label="POOL SAMPLES BETWEEN CLIENTS">
                    <div class="text-text-secondary mb-5">When enabled, products imported on two different jobs will
                        share
                        samples.</div>
                    <ui-checkbox v-for="item in checkboxes" :key="item.id" v-model="item.value" :id="item.id"
                        :label="item.label">
                        <v-icon size="18" class="mx-2">mdi-arrow-left-right</v-icon>
                        {{item.label2}}
                    </ui-checkbox>
                </input-with-label>
            </v-col>
        </v-row>
    </add-client-component-template>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from './add-client-component-template.vue';
import UiSwitch from '@/components/ui-switch/ui-switch.vue';
import InputWithLabel from '../../../components/input-with-lable.vue/input-with-label.vue';
import UiCheckbox from '@/components/ui-checkbox/ui-checkbox.vue';
import { reactive } from 'vue';

const checkboxes = reactive([])

const initCheckboxes = () => {
    for (let i = 0; i < 5; i++) {
        checkboxes.push({ id: i, label: "Test", label2: 'AMAZON FASHION UK', value: false })
    }
}

initCheckboxes()

</script>

<style lang="scss" scoped>
</style>