<template>
    <v-btn class="blue-button" color="primary" flat>
        <slot />
    </v-btn>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.blue-button {
    &:hover {
        box-shadow: 0px 0px 10px rgba(73, 159, 255, 0.5);;
    }
    &:active {
        background-color: rgb(var(--v-theme-primary-darken)) !important;
    }
}
</style>