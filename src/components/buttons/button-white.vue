<template>
    <v-btn class="white-button" :size="props.size" color="white" flat>
        <slot />
    </v-btn>
</template>

<script lang="ts" setup>
interface IProps {
    size?: string | number
}

const props = withDefaults(defineProps<IProps>(), {
    size: "default"
})
</script>

<style lang="scss" scoped>
.white-button {
    border: 1px solid #C4C4C4 !important;
    transition: all 0.15s linear;

    &:hover {
        color: rgb(var(--v-theme-primary)) !important;
        border: 1px solid #7B7B7B !important;
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
    }

    &:active {
        background: rgba(73, 159, 255, 0.25) !important;
    }
}
</style>