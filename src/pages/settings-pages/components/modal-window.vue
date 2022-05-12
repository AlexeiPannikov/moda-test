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
                    <slot name="footer"></slot>
                </div>
            </div>
        </template>
    </ui-modal-window>
</template>

<script lang="ts" setup>
import UiModalWindow from '@components/ui-modal-window/ui-modal-window.vue';
import { reactive } from '@vue/reactivity';

interface IProps {
    isOpen: boolean;
    maxWidth?: string;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
    maxWidth: '560px'
})

const emit = defineEmits(['save', 'cancel'])

const styles = reactive({
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    maxWidth: props.maxWidth,
    width: '100%'
})
</script>


<style lang="scss" scoped>
</style>