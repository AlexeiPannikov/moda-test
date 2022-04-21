<template>
    <div class="tab-item-slider" @click="onClick" :class="{ active: props.item.isActive }">
        {{ props.item.name }}
    </div>
</template>

<script lang="ts" setup>
import { TabItemModel } from "./TabItemModel"

interface IProps<T> {
    item: TabItemModel<T>
}

const props = withDefaults(defineProps<IProps<any>>(), {
    item: () => new TabItemModel<any>()
})

const emit = defineEmits<{
    (e: 'click', value: TabItemModel<any>): void
}>()

const onClick = () => {
    emit('click', props.item)
}
</script>

<style lang="scss" scoped>
.tab-item-slider {
    color: var(--text-main-color);
    font-size: 18px;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    margin: 0 30px 0 0;
    padding-bottom: 18px;
}

.active {

    &::after {
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: var(--main-color);
    }
}
</style>