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
    height: 100vh;
    background-color: var(--background-main-color);
    display: flex;
    flex-direction: column;

    .main {
        display: flex;
        flex-direction: column;
        flex: 1 1 100%;
    }
}
</style>