<template>
    <div class="overview-item">
        <div class="label">{{ props.item.label }}</div>
        <div class="value">
            {{ props.item.value }}
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>import { OverviewItemModel } from './OverviewItemModel';

interface IProps {
    item: OverviewItemModel
}

const props = withDefaults(defineProps<IProps>(), {
    item: () => new OverviewItemModel()
})
</script>

<style lang="scss" scoped>
.overview-item {
    display: flex;
    font-size: 18px;

    .label {
        color: var(--text-sub-color);
        margin-right: 20px;
    }

    .value {
        color: var(--text-main-color);
        font-weight: bold;
    }
}
</style>