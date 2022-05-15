<template>
    <modal-window-template :isOpen="props.isOpen">
        <template #header>
            Metadata Namespace
        </template>
        <input-with-label label="NAME">
            <ui-text-input label="Enter namespace name"></ui-text-input>
        </input-with-label>
        <input-with-label class="mt-9" label="NAMESPACE PREFIX">
            <ui-text-input label="Enter namespace prefix"></ui-text-input>
        </input-with-label>
        <input-with-label class="mt-9" label="XMLNS URI">
            <ui-text-input label="Enter namespace XMLNS URI"></ui-text-input>
        </input-with-label>
        <input-with-label class="mt-9" label="POOL SAMPLES">
            <span class="text-text-secondary">Please input Namespace Prefix value to see the result</span>
        </input-with-label>
        <input-with-label class="mt-9" label="PROPERTIES">
            <ui-textarea></ui-textarea>
        </input-with-label>
        <template #footer>
            <div class="modal-footer">

            </div>
        </template>
    </modal-window-template>
</template>

<script lang="ts" setup>
import ModalWindowTemplate from "../modal-window-template.vue"
import InputWithLabel from '@components/input-with-label/input-with-label.vue';
import UiTextInput from '@components/ui-text-input/ui-text-input.vue'
import { reactive, ref } from "vue";
import { DropdownItemModel } from "@components/ui-dropdown/DropdownItemModel";
import UiTextarea from "@components/ui-textarea/ui-textarea.vue"

interface IProps {
    isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
})
</script>

<style lang="scss" scoped>
</style>