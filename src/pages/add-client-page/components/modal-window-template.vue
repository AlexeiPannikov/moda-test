<template>
    <ui-modal-window :isOpen="props.isOpen" :styles="styles">
        <template #header>
            <h1 class="modal-header text-h4 font-weight-regular text-center text-primary mb-8">
                <slot name="header"></slot>
            </h1>
        </template>
        <slot></slot>
        <template #footer>
            <div class="modal-footer mt-9 d-flex justify-end">
                <div class="buttons">
                    <button-green @click="$emit('save')" class="mr-5">Save</button-green>
                    <button-white @click="$emit('cancel')">Cancel</button-white>
                </div>
            </div>
        </template>
    </ui-modal-window>
</template>

<script lang="ts" setup>
import UiModalWindow from '@components/ui-modal-window/ui-modal-window.vue';
import ButtonGreen from '@components/buttons/button-green.vue';
import ButtonWhite from '@components/buttons/button-white.vue';
import { reactive } from '@vue/reactivity';

interface IProps {
    isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
})

const emit = defineEmits(['save', 'cancel'])

const styles = reactive({
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    maxWidth: '560px',
    width: '100%'
})
</script>


<style lang="scss" scoped>
</style>