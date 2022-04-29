<template>
    <div class="product-status">
        <div class="status-icon" :style="{background: 'url('+icon+')'}" />
        <div class="status-text">{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import { ProductStatusEnum } from './ProductStatusEnum';

const props = defineProps<{
    status: ProductStatusEnum
}>();

const icon = ref("")
const color = ref("")
const text = ref("")

const initComponent = () => {
    switch (props.status) {
        case ProductStatusEnum.Done:
            icon.value = "'../../assets/icons/done.svg'"
            color.value = '#14CC26'
            text.value = 'Done'
            break;
        case ProductStatusEnum.ToDo:
            icon.value = "'@assets/icons/to-do.svg'"
            color.value = '#499FFF'
            text.value = 'To Do'
            break;
        case ProductStatusEnum.Backlog:
            icon.value = "'@assets/icons/backlog.svg'"
            color.value = 'var(--text-main-color)'
            text.value = 'Backlog'
            break;
    }
}

onMounted(() => {
    initComponent()
})
</script>

<style lang="scss" scoped>
.product-status {
    display: flex;

    .status-icon {
        width: 20px;
        height: 20px;
    }

    .status-text {}
}
</style>
