<template>
    <div class="tooltip" @mouseover="isVisibleTooltip = true" @mouseleave="isVisibleTooltip = false">
        <div class="tooltip-icon">
            <slot />
        </div>
        <div class="tooltip-content" :class="{ active: isVisibleTooltip }">
            <slot name="tooltip" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let isVisibleTooltip = ref(false)
</script>

<style lang="scss" scoped>
.tooltip {
    position: relative;
    .tooltip-content {
        position: absolute;
        left: -50%;
        padding: 4px 8px;
        border-radius: 4px;
        opacity: 0;
        font-size: 10px;
        color: white;
        background-color: grey;
        transform: scale(0);
        transition: opacity 0.2s linear, transform 0.02s linear;
        z-index: 20;
    }

    .active {
        opacity: 0.8;
        transform: scale(1);
        transition: opacity 0.2s linear, transform 0.05s linear;
    }
}
</style>