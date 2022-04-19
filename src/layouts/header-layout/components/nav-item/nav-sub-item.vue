<template>
    <div @click="clickHandler" class="nav-sub-item"
        :class="{ active: IsNavItem() && route.name === (item as NavLinkModel).PathName }">
        <div class="sub-item-name">
            {{ item.Name }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { NavLinkModel } from './models/NavLinkModel';
import router from '../../../../router/router'
import { useRoute } from 'vue-router';
import { NavButtonModel } from './models/NavButtonModel';

interface IProps {
    item: NavLinkModel | NavButtonModel
}

const props = withDefaults(defineProps<IProps>(), {
    item: () => new NavLinkModel()
})

const emit = defineEmits<{
  (e: 'click', itemName: string): void
}>()

const route = useRoute()

const item = reactive(props.item)

const IsButton = (): boolean => {
    return item instanceof NavButtonModel
}

const IsNavItem = (): boolean => {
    return item instanceof NavLinkModel
}

const clickHandler = () => {
    if (IsNavItem()) {
        router.push({ name: (item as NavLinkModel).PathName })
    }
    if (IsButton()) {
        emit('click', (item as NavButtonModel).Name)
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
    color: var(--text-main-color);
    font-weight: 500;
    white-space: nowrap;
    font-size: 13px;
    position: relative;
    cursor: pointer;
    transition: all 0.15s linear;

    &:hover {
        border-left-color: var(--main-color);
        background-color: #f8f8f8;
    }
}

.active {
    border-left-color: var(--main-color);
    background-color: #f8f8f8;
}
</style>