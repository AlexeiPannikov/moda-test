<template>
    <div class="ui-dropdown" v-click-outside="closeList">
        <input class="dropdown-input" :value="currentItem.name" @click="openList" :placeholder="props.placeholder"
            readonly />
        <div class="dropdown-overlay" :class="{ 'active-list': isOpenList, 'dropdown-dirty': currentItem.name, 'active-input': isOpenList }">

        </div>
        <div class="dropdown-list" v-if="isOpenList" :style="{maxHeight: props.maxHeight}">

        </div>
    </div>
</template>

<script lang="ts" setup>import { reactive, ref } from '@vue/reactivity';
import { DropdownItemModel } from './DropdownItemModel';

interface IProps {
    placeholder?: string,
    modelValue: any,
    items: DropdownItemModel[],
    width: string,
    maxHeight: string,
}

const props = withDefaults(defineProps<IProps>(), {
    placeholder: '',
    modelValue: null,
    items: () => new Array<DropdownItemModel>(),
    width: "100%",
    maxHeight: "200px",
})

const isOpenList = ref(false)

const currentItem = reactive(new DropdownItemModel())

const openList = () => {
    isOpenList.value = true
}

const closeList = () => {
    isOpenList.value = false
}

</script>

<style lang="scss" scoped>
.ui-dropdown {
    position: relative;
    height: 46px;
    border-radius: 4px;

    .dropdown-input {
        width: 100%;
        height: 100%;
        padding: 0 20px 0 20px;
        border-radius: 4px;

        &:focus {
            outline: none;
        }
    }

    .dropdown-overlay {
        position: absolute;
        min-height: 100%;
        width: 100%;
        border: 1px solid black;
        pointer-events: none;
        opacity: 0.38;
        border-radius: 4px;
        top: 0;
        left: 0;
        transition: opacity 0.15s ease-out;
    }

    &:hover .dropdown-overlay {
        opacity: 1;
    }

    &:focus-within .dropdown-overlay {
        opacity: 1;
    }

    .dropdown-list {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        position: absolute;
        top: 46px;
        z-index: 2000;
        width: 100%;
        height: 100%;
        background-color: white;
        border-top: 0;
        border-bottom: 1px;
        border-left: 1px;
        border-right: 1px;
        border-style: solid;
        border-color: rgb(var(--v-theme-primary));
    }

    .active-list {
        border-color: rgb(var(--v-theme-primary));
    }

    .active-input {
        border-bottom: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .dropdown-dirty {
        border-color: rgb(var(--v-theme-primary));
    }
}
</style>