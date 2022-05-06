<template>
    <div class="ui-dropdown" v-click-outside="closeList">
        <input class="dropdown-input" :value="currentItemName" @click="openList" readonly />
        <div class="dropdown-placeholder" v-if="!currentItemName">
            {{ props.placeholder }}
        </div>
        <div class="dropdown-icon ">
            <v-icon>mdi-chevron-down</v-icon>
        </div>
        <div class="dropdown-overlay"
            :class="{ 'active-list': isOpenList, 'dropdown-dirty': currentItemName, 'active-input': isOpenList }">

        </div>
        <div class="dropdown-list" ref="list" :style="{ height: maxHeight, zIndex: isOpenList ? 2000 : -2000 }">
            <scroll-box-2>
                <div class="dropdown-item" @click="selectItem(item.id)" v-for="item in props.items" :key="item.id">
                    <span>{{
                            item.name
                    }}</span></div>
            </scroll-box-2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import { DropdownItemModel } from './DropdownItemModel';
import ScrollBox2 from '../scroll-box/scroll-box-2.vue';

interface IProps {
    placeholder?: string,
    modelValue: number | null,
    items: DropdownItemModel[],
    width?: string,
    maxHeight?: string,
}

const props = withDefaults(defineProps<IProps>(), {
    placeholder: '',
    modelValue: null,
    items: () => new Array<DropdownItemModel>(),
    width: "100%",
    maxHeight: "",
})

const emits = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()

const maxHeight = ref("")

const list = ref<Ref<HTMLElement>>(null)

const isOpenList = ref(false)

const currentItemName = computed(() => {
    return props.items.find(item => item.id === props.modelValue)?.name || ""
})

onMounted(() => {
    setMaxHeight()
})

const setMaxHeight = () => {
    maxHeight.value = props.maxHeight
    if (!maxHeight.value) {
        console.log(list.value.getBoundingClientRect());
        maxHeight.value = `${window.innerHeight - list.value.getBoundingClientRect().top - 10}px`
    }
}

const openList = () => {
    setMaxHeight()
    isOpenList.value = true
}

const closeList = () => {
    isOpenList.value = false
}

const selectItem = (id: number) => {
    props.items.forEach(item => {
        item.isSelected = item.id === id
    })
    emits('update:modelValue', id)
    closeList()
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
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    .dropdown-icon,
    .dropdown-placeholder {
        pointer-events: none;
        position: absolute;
        top: calc(50% - 12px);
        color: rgb(var(--v-text-primary));
        opacity: 0.7;
    }

    .dropdown-placeholder {
        left: 20px;
    }

    .dropdown-icon {
        right: 20px;
        pointer-events: none;
    }

    .dropdown-overlay {
        position: absolute;
        min-height: 100%;
        width: 100%;
        border: 1px solid black;
        pointer-events: none;
        opacity: 0.48;
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
        width: 100%;
        background-color: white;
        border-top: 0;
        border-bottom: 1px;
        border-left: 1px;
        border-right: 1px;
        border-style: solid;
        border-color: rgb(var(--v-theme-primary));
        padding: 0 16px 10px 16px;

        .dropdown-item {
            border-top: 1px solid rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            padding: 8px 0;
            cursor: pointer;

            span {
                color: rgb(var(--v-text-primary));
                font-weight: 500;
                transition: all 0.15s linear;
            }

            &:hover {
                span {
                    font-weight: bold;
                    transform: translateX(10px);
                }
            }
        }
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