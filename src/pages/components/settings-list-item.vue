<template>
    <v-list-item class="settings-list-item" color="text-primary" height="46px" :to="to" active-color="white">
        <v-list-item-title>
            <slot></slot>
        </v-list-item-title>
    </v-list-item>
</template>

<script lang="ts" setup>
interface IProps {
    to: {}
}

const props = withDefaults(defineProps<IProps>(), {
    to: () => { return {} }
})

</script>

<style lang="scss" scoped>
.settings-list-item {
    border-radius: 5px 0px 0px 5px;
    border: 2px solid transparent;
    background: transparent;

    &:not(:first-child) {
        margin-top: 5px;
    }

    &:hover {
        background:
            linear-gradient(white, white) padding-box,
            linear-gradient(90deg, #499FFF 0%, rgba(73, 159, 255, 0) 50%) border-box;
    }

    &.v-list-item--active {
        background-color: rgb(var(--v-theme-primary));

        &:hover {
            background: rgb(var(--v-theme-primary));
        }
    }
}


.settings-list-item:hover:deep() .v-list-item__overlay {
    opacity: 0 !important;
}
</style>