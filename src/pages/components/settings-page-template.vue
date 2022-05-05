<template>
    <v-container class="h-100 d-flex flex-column">
        <v-row class="flex-grow-0" no-gutters>
            <h1 class="text-h3 text-text-primary font-weight-light mb-4">
                <slot name="title"></slot>
            </h1>
        </v-row>
        <v-row class="flex-grow-1" no-gutters>
            <v-card class="h-100 w-100 d-flex px-5 py-5">
                <v-row no-gutters>
                    <v-col cols="2">
                        <v-list class="menu-settings-list h-100" density="compact">
                            <slot name="menu"></slot>
                        </v-list>
                    </v-col>
                    <v-col cols="10 pl-4">
                        <slot name="content"></slot>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.menu-settings-list {
    border-right: 2px solid rgb(var(--v-theme-primary));
}
</style>