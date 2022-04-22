<template>
    <div class="nav-item-wrap" v-click-outside="clickOutsideHandler">
        <div @click="clickHandler" class="nav-item" :class="activeClass">
            <div class="item-name">
                <slot />
                <span>{{ item.Name }}</span>
            </div>
            <div v-if="IsButton()" class="item-arrow" />
        </div>
        <dropdown-box :is-open="isOpenDropdown && IsButton()">
            <nav-sub-item v-for="subItem in (item as NavButtonModel).SubItemList" :key="subItem.Name" :item="subItem" @click="subItemClickHandler" />
        </dropdown-box>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { NavLinkModel } from './models/NavLinkModel';
import router from '../../../../router/router'
import { useRoute } from 'vue-router';
import DropdownBox from '../../../../components/dropdown-box/dropdown-box.vue'
import NavSubItem from './nav-sub-item.vue';
import { NavButtonModel } from './models/NavButtonModel';

interface IProps {
    item: NavLinkModel | NavButtonModel
}

const props = withDefaults(defineProps<IProps>(), {
    item: () => new NavButtonModel()
})

const emit = defineEmits<{
    (e: 'click', itemName: string): void
}>()

const route = useRoute()

const item = reactive(props.item)

const isOpenDropdown = ref(false)

const IsButton = (): boolean => {
    return item instanceof NavButtonModel
}

const IsNavItem = (): boolean => {
    return item instanceof NavLinkModel
}

const activeClass = computed(() => {
    if (IsNavItem() && route.name === (item as NavLinkModel).PathName) {
        return 'active'
    }
    if (IsButton() && isOpenDropdown.value) {
        return 'active'
    }
})

const getColor = computed(() => {
    if (IsNavItem() && route.name === (item as NavLinkModel).PathName) {
        return 'var(--main-color)'
    }
    if (isOpenDropdown.value) {
        return '#f2f2f2'
    }
})

const clickHandler = (e: Event) => {
    if (IsNavItem()) {
        router.push({ path: (item as NavLinkModel).Path })
        return
    }
    isOpenDropdown.value = !isOpenDropdown.value
}

const subItemClickHandler = (itemName: string) => {
    emit('click', itemName)
}

const clickOutsideHandler = () => {
    isOpenDropdown.value = false
}
</script>

<style lang="scss" scoped>
.nav-item-wrap {
    position: relative;
    height: 100%;

    .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        padding: 0 25px;
        height: 100%;
        position: relative;
        cursor: pointer;

        &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 4px;
            background-color: transparent;
            transition: all 0.15s linear;
        }

        &:hover::before {
            background-color: #f2f2f2;
        }

        .item-arrow {
            transform: rotate(45deg);
            border-right: 1px solid #bebebe;
            border-bottom: 1px solid #bebebe;
            width: 8px;
            height: 8px;
            margin-left: 10px;
            position: relative;
            top: -4px;
        }

        .item-name {
            color: var(--text-main-color);
            font-weight: 500;
            font-size: 13px;
            display: flex;
            align-items: center;
        }

        &:hover .item-arrow {
            border-color: var(--main-color);
        }
    }

    .active::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: v-bind(getColor);
        transition: all 0.15s linear;
    }

    .active:hover::before {
        background-color: v-bind(getColor);
    }
}
</style>