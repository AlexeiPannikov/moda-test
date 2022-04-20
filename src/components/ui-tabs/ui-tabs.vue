<template>
    <div class="tabs">
        <div v-for="item in props.tabs.tabList" :key="item.id">
            <slot :item="item" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TabsModel } from './TabsModel';

interface IProps<T> {
    tabs: TabsModel<T>
}

const props = withDefaults(defineProps<IProps<any>>(), {
    tabs: () => new TabsModel<any>()
})

</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
}
</style>