<template>
    <v-btn class="blue-button" @click="$emit('click')" :size="props.size" color="primary" flat>
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
.blue-button {
    &:hover {
        box-shadow: 0px 0px 10px rgba(73, 159, 255, 0.5);
        ;
    }

    &:active {
        background-color: rgb(var(--v-theme-primary-darken)) !important;
    }
}
</style>