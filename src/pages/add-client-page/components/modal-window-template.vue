<template>
    <div class="modal-window-template">
        <ui-modal-window :isOpen="props.isOpen" :styles="styles">
        </ui-modal-window>
    </div>

</template>

<script lang="ts" setup>
import UiModalWindow from '@components/ui-modal-window/ui-modal-window.vue';
import { reactive } from '@vue/reactivity';

interface IProps {
    isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
})

const styles = reactive({
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
})
</script>

<style lang="scss" scoped>
</style>