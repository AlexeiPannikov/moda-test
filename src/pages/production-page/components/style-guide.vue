<template>
    <overview-item :item="item">
        <div class="buttons">
            <button class="view">View</button>
            <button class="edit">Edit</button>
        </div>
    </overview-item>
</template>

<script lang="ts" setup>
import { OverviewItemModel } from './OverviewItemModel';
import OverviewItem from './overview-item.vue'

interface IProps {
    item: OverviewItemModel
}

const props = withDefaults(defineProps<IProps>(), {
    item: () => new OverviewItemModel()
})
</script>

<style lang="scss" scoped>
.buttons {
    margin-top: 10px;
    display: flex;


    .view,
    .edit {
        cursor: pointer;
        color: var(--main-color);
        background-color: transparent;
        border: 1px solid #7B7B7B;
        font-size: 12px;
        font-weight: 400;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px 3px 10px;
    }

    .view {
        margin-right: 10px;
    }
}
</style>