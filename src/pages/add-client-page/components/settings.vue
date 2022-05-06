<template>
    <add-client-component-template>
        <template #title>
            Add Client
        </template>
        <v-row no-gutters>
            <v-col cols="6">
                <input-with-label class="mt-9 w-75" label="CLIENT NAME">
                    <ui-text-input label="Add clients in bulk using semi-colon as separator"></ui-text-input>
                    <ui-switch label="Enable Client"></ui-switch>
                </input-with-label>
            </v-col>
            <v-col cols="4">
                <input-with-label class="mt-9" label="CLIENT TIMEZONE">
                    <ui-dropdown v-model="currentTimezone" :items="timezonesList" placeholder="Select...">
                    </ui-dropdown>
                </input-with-label>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6">
                <input-with-label class="mt-9 w-75" label="USER GROUPS">
                    <ui-switch label="Amazon"></ui-switch>
                    <ui-switch label="RTL"></ui-switch>
                    <ui-switch label="ETRO"></ui-switch>
                </input-with-label>
            </v-col>
            <v-col cols="4">
                <input-with-label class="mt-9" label="CLIENT TIMEZONE">
                    <ui-file-input label="image/png, image/jpeg, image/jpg, image/jpe">JPG, JPE, JPEG and PNG ONLY</ui-file-input>
                </input-with-label>
            </v-col>
        </v-row>
    </add-client-component-template>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from './add-client-component-template.vue';
import UiTextInput from '@components/ui-text-input/ui-text-input.vue';
import UiSwitch from '@/components/ui-switch/ui-switch.vue';
import InputWithLabel from '../../../components/input-with-lable.vue/input-with-label.vue';
import UiDropdown from '@/components/ui-dropdown/ui-dropdown.vue';
import { reactive, ref } from 'vue';
import { DropdownItemModel } from '@/components/ui-dropdown/DropdownItemModel';
import { useTimezones } from '@/functions/useTimezones';
import UiFileInput from '@/components/ui-file-input/ui-file-input.vue';

const timezones = useTimezones()

const timezonesList = reactive(new Array<DropdownItemModel>())

const currentTimezone = ref(null)

const initTimezoneList = () => {
    for (let tz of timezones) {
        timezonesList.push(
            new DropdownItemModel({
                id: tz.id,
                name: tz.timezone
            })
        )
    }
}

initTimezoneList()

</script>

<style lang="scss" scoped>
</style>