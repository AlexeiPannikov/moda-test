<template>
    <v-switch :label="props.label" color="primary" class="ui-switch" hide-details></v-switch>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.ui-switch {
    &:deep().v-label {
        color: rgb(var(--v-theme-text-primary));
        opacity: 1;
    }
}
</style>