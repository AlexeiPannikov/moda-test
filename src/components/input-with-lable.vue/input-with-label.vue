<template>
    <div class="input-with-label">
        <div v-if="props.label" class="mb-2 font-weight-bold text-text-primary">
            {{ label }}
        </div>
        <slot></slot>
    </div>
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
</style>