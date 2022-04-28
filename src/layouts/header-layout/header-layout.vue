<template>
    <header class="header">

        <!-- Logo -->
        <div @click="() => {router.push('/')}" class="header-logo">
            Logo
        </div>

        <!-- Navigation -->
        <nav class="navigation">
            <nav-item v-for="item in MainNavigationList.ItemList" :key="item.Name" :item="item" />
        </nav>

        <!-- Icon group -->
        <div class="icon-group">
            <div @click="iconClickHandler" class="keyboards">k-boards</div>
            <ui-tooltip>
                <div @click="iconClickHandler" class="t-zone">t-zone</div>
                <template #tooltip>
                    timezone
                </template>
            </ui-tooltip>
        </div>

        <!-- Right menu -->
        <nav class="right-menu">
            <nav-item :item="RightMenu.Item" @click="itemClickHandler">
                <div class="user-avatar">
                    AM
                </div>
            </nav-item>
        </nav>

        <!-- My settings modal -->
        <ui-modal-window :is-open="isOpenModal" @close="isOpenModal = false">
            <template #header>
                Modal window header
            </template>
            Modal window content
        </ui-modal-window>
    </header>
</template>

<script lang="ts" setup>
import NavItem from './components/nav-item/nav-item.vue'
import MainNavigationList from './models/MainNavigationList'
import RightMenu from './models/RightMenu'
import UiTooltip from '../../components/tooltip/ui-tooltip.vue';
import UiModalWindow from '../../components/ui-modal-window/ui-modal-window.vue';
import { ref } from '@vue/reactivity';
import router from '../../router/router';

const isOpenModal = ref(false)

const itemClickHandler = (itemName: string) => {
    console.log(itemName);
    isOpenModal.value = true
}

const iconClickHandler = () => {
    isOpenModal.value = true
}
</script>

<style lang="scss" scoped>
.header {
    background-color: var(--header-background-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 73px;
    padding: 0 10px 0 42px;

    .header-logo {
        height: 50px;
        flex: 0 0 50px;
        background-color: #C4C4C4;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 30px;
        cursor: pointer;
    }

    .navigation {
        height: 100%;
        flex: 1 1 100%;
        display: flex;
    }


    .icon-group {
        display: flex;
        align-items: center;
        margin: 0 25px;
        height: 100%;

        &:deep() .tooltip {
            height: 100%;

            .tooltip-icon {
                height: 100%;
            }
        }

        .keyboards,
        .t-zone {
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        & div:first-child {
            margin-right: 20px;
        }
    }

    .right-menu {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #e9e9e9;

        .user-avatar {
            width: 40px;
            height: 40px;
            background-color: #C4C4C4;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 10px;
            color: #fff;
        }
    }
}
</style>