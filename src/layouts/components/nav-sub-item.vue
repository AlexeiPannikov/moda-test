<template>
    <div @click="clickHandler" class="nav-sub-item" :class="{ active: route.name === (props.to as any)?.name }">
        <div class=" sub-item-name">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

interface IProps {
    to?: {}
}

const props = withDefaults(defineProps<IProps>(), {
    to: null
})

const emit = defineEmits<{
    (e: 'click', itemName: string): void
}>()

const router = useRouter()
const route = useRoute()

const clickHandler = () => {
    if (props.to) {
        router.push(props.to)
    }
}
</script>

<style lang="scss" scoped>
.nav-sub-item {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 230px;
    padding: 14px 25px 14px 30px;
    border-left: 3px solid transparent;
    color: var(--v-theme-text-primary);
    font-weight: 500;
    white-space: nowrap;
    font-size: 13px;
    position: relative;
    cursor: pointer;
    transition: all 0.15s linear;

    &:hover {
        border-left-color: rgb(var(--v-theme-primary));
        background-color: #f8f8f8;
    }
}

.active {
    border-left-color: rgb(var(--v-theme-primary));
    background-color: #f8f8f8;
}
</style>