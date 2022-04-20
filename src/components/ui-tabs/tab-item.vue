<template>
    <div class="tab-item" @click="onClick" :class="{ active: props.item.isActive }">
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
.tab-item {
    border-radius: 16px;
    padding: 15px 20px;
    color: var(--main-color);
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    transition: all 0.15s linear;
}

.active {
    color: white;
    background-color: var(--main-color);
}
</style>