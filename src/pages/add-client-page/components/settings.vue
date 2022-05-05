<template>
    <add-client-component-template>
        <template #title>
            Add Client
        </template>
        <v-row no-gutters>
            <v-col cols="6">
                <div class="w-75">
                    <input-with-label class="mt-5" label="CLIENT NAME">
                        <ui-text-input label="Add clients in bulk using semi-colon as separator"></ui-text-input>
                        <ui-switch label="Enable Client"></ui-switch>
                    </input-with-label>
                    <input-with-label class="mt-5" label="USER GROUPS">
                        <ui-switch label="Amazon"></ui-switch>
                        <ui-switch label="RTL"></ui-switch>
                        <ui-switch label="ETRO"></ui-switch>
                    </input-with-label>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="w-75">
                    <input-with-label class="mt-5" label="CLIENT NAME">
                        <ui-dropdown v-model="timezone" :items="timezones" label="Select..."></ui-dropdown>
                    </input-with-label>
                </div>
            </v-col>
        </v-row>
        <row no-gutters>
            <v-col></v-col>
            <v-col></v-col>
        </row>
    </add-client-component-template>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from './add-client-component-template.vue';
import UiTextInput from '@components/ui-text-input/ui-text-input.vue';
import UiSwitch from '@/components/ui-switch/ui-switch.vue';
import InputWithLabel from '../../../components/input-with-lable.vue/input-with-label.vue';
import UiDropdown from '@/components/ui-dropdown/ui-dropdown.vue';
import { reactive, ref } from 'vue';

const timezones = reactive([
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
])

const timezone = ref(null)
</script>

<style lang="scss" scoped>
</style>