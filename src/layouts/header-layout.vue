<template>
    <v-app-bar class="header pl-9 pr-3" flat absolute>
        <div class="logo">
            Logo
        </div>
        <v-tabs class="tabs w-100" color="text-primary" slider-color="primary" alignWithTitle showArrows optional>
            <v-tab :to="{ name: 'production', params: {type: 'in-progress'} }">
                PRODUCTION
            </v-tab>
            <v-tab :to="{ name: 'jobs' }">
                JOBS
            </v-tab>
            <v-tab :to="{ name: 'products' }">
                PRODUCTS
            </v-tab>
            <v-menu transition="slide-y-transition">
                <template #activator="{ props }">
                    <v-btn class="button h-100" slider-color="tab-slider-hover" v-bind="props">
                        TASKS
                        <v-icon right>
                            mdi-chevron-down
                        </v-icon>
                    </v-btn>
                </template>
                <v-list min-width="230">
                    <v-list-item class="list-item pl-9" v-for="(item, i) in tasks" :key="i"
                        :to="{ name: item.pathName }">
                        <v-list-item-title style="font-size: 13px;">{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-tab :to="{ name: 'samples' }">
                SAMPLES
            </v-tab>
            <v-tab :to="{ name: 'assets' }">
                ASSETS
            </v-tab>
            <v-tab :to="{ name: 'wardrobe' }">
                WARDROBE
            </v-tab>
            <v-tab :to="{ name: 'insights' }">
                INSIGHTS
            </v-tab>
            <v-tab :to="{ name: 'labs' }">
                LABS
            </v-tab>
        </v-tabs>

        <div class="icon-group mr-4">
            <v-btn icon="mdi-keyboard-outline" class="mr-2 text-text-secondary" width="24" height="24" />
            <v-tooltip anchor="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-clock-time-two-outline" class="text-text-secondary" v-bind="props" width="24"
                        height="24" />
                </template>
                <span>Tooltip</span>
            </v-tooltip>
        </div>

        <v-menu transition="slide-y-transition">
            <template #activator="{ props }">
                <v-tab class="button border-left" slider-color="tab-slider-hover" v-bind="props">
                    <v-avatar class="mr-4" :image="DefaultAvatar"></v-avatar>
                    PIXELMODA
                    <v-icon right>
                        mdi-chevron-down
                    </v-icon>
                </v-tab>
            </template>
            <v-list>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">MY SETTINGS</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9" :to="{ name: 'studio', params: {item: 'general'} }">
                    <v-list-item-title style="font-size: 13px;">STUDIO SETTINGS</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">WORKFLOWS</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">STYLE GUIDES</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">COMPUTER LOCATION</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">DEBUG INFO</v-list-item-title>
                </v-list-item>
                <v-list-item class="list-item pl-9">
                    <v-list-item-title style="font-size: 13px;">LOGOUT</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import DefaultAvatar from "@assets/images/default-avatar.png"

const tasks = reactive([
    { name: "PHOTOGRAPHY", pathName: 'production' },
    { name: "FINAL SELECTION", pathName: 'production' },
])
</script>

<style lang="scss">
.header {
    .logo {
        background-color: #C4C4C4;
        border-radius: 50%;
        flex: 0 0 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }

    .icon-group {
        display: flex;
    }

    .border-left {
        border-left: 1px solid #e9e9e9;
    }
}

.v-btn__overlay {
    opacity: 0 !important;
}

.v-tab {

    .v-tab__slider {
        height: 4px;
    }
}

.v-tab:hover {

    .v-tab__slider {
        opacity: 1 !important;
        background-color: #f2f2f2;
    }
}

.v-tab--selected:hover {

    .v-tab__slider {
        background-color: rgb(var(--v-theme-primary)) !important;
    }
}

.button {
    position: relative !important;
    border-radius: 0 !important;

    &::before {
        content: '';
        display: block;
        position: absolute;
        background-color: transparent;
        height: 4px;
        width: 100%;
        bottom: 0;
        left: 0;
        transition: all 0.15s linear;
    }

    &:hover::before {
        content: '';
        background-color: #f2f2f2;
    }
}

// .list-item {
//     border-left: 4px solid transparent !important;

//     &:hover {
//         background-color: #f8f8f8;
//         border-color: rgb(var(--v-theme-primary)) !important;
//     }
// }

// .list-item.v-list-item--active {
// border-left: 4px solid rgb(var(--v-theme-primary));
// background-color: white;
// }

.list-item.list-item.v-list-item--active .v-list-item__overlay {
    opacity: 0 !important;
}

.list-item.v-list-item {
    cursor: pointer;

    &:hover {
        background-color: #f8f8f8;
    }

    &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: transparent;
        transition: all 0.15s linear;
    }

    &:hover::before {
        background-color: rgb(var(--v-theme-primary));
    }

    &.v-list-item--active {
        &::before {
            background-color: rgb(var(--v-theme-primary));
        }
    }
}
</style>