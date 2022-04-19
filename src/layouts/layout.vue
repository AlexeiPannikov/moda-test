<template>
    <div class="main-wrapper">
        <header-layout />

        <main class="main">
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts" setup>
import headerLayout from './header-layout/header-layout.vue';
</script>

<style lang="scss" scoped>
.main-wrapper {
    height: 100%;
    min-height: 100%;
    background-color: var(--background-main-color);
    padding: 0 0 14px 0;
}
</style>