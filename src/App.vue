<template>
  <router-view />
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import "./assets/styles/normalize.css";
@import "./assets/styles/variables.css";
@import "./assets/fonts/roboto.css";

* {
  box-sizing: border-box;
  font-family: 'Roboto', 'sans-serif';
  letter-spacing: 1px;
}

body {
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
}

html,
body,
#app {
  height: 100%;
  min-height: 100%;
}

a,
a:active,
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
