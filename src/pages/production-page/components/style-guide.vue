<template>
    <overview-item :item="item">
        <div class="buttons">
            <button-white size="small" class="mr-2">View</button-white>
            <button-white size="small">Edit</button-white>
        </div>
    </overview-item>
</template>

<script lang="ts" setup>
import { OverviewItemModel } from './OverviewItemModel';
import OverviewItem from './overview-item.vue'
import ButtonWhite from '@components/buttons/button-white.vue'

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
}
</style>