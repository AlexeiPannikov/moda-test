<template>
    <modal-window-template :isOpen="props.isOpen">
    </modal-window-template>
</template>

<script lang="ts" setup>
import ModalWindowTemplate from "../modal-window-template.vue"

interface IProps {
    isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
})
</script>

<style lang="scss" scoped>
</style>