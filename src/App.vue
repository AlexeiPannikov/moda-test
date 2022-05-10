<template>
  <v-app class="h-screen d-flex">
    <header-layout />
    <v-main class="main">
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import HeaderLayout from './layouts/header-layout.vue';
const route = useRoute()

</script>

<style lang="scss">
// div, a {
//   color: rgb(var(--v-theme-text-primary));
// }
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-to {
  opacity: 1;
}

html {
  overflow: hidden;
}

.main {
  max-height: 100vh;
  flex-grow: 1;
}

.v-application__wrap {
  height: 100vh;
  min-height: auto !important;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.v-card--variant-contained {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25) !important;
}
</style>