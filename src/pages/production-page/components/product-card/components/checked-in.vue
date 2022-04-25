<template>
    <div class="overview-item checked-in" v-if="props.item.isVisible">
        CHECKED IN
    </div>
</template>

<script lang="ts" setup>
import { OverviewItemModel } from './OverviewItemModel';

interface IProps {
    item: OverviewItemModel
}

const props = withDefaults(defineProps<IProps>(), {
    item: () => new OverviewItemModel()
})
</script>

<style lang="scss" scoped>
.checked-in {
    border: 1px solid var(--main-green);
    border-radius: 15px;
    color: var(--main-green);
    width: max-content;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 3px 10px;
}
</style>