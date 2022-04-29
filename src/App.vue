<template>
  <router-view />
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import "./assets/styles/normalize.css";
@import "./assets/styles/reset.css";
@import "./assets/styles/variables.css";
@import "./assets/fonts/roboto.css";

* {
  box-sizing: border-box;
  font-family: 'Roboto', 'sans-serif';
}

.button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  border: none;
  outline: none;
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
}

a,
a:active,
a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
