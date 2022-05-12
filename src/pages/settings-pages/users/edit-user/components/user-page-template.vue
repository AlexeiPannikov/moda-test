<template>
  <div class="add-client-component-template d-flex flex-column">
    <div class="content flex-grow-1">
      <slot></slot>
    </div>
    <div class="buttons align-self-end flex-grow-0 mt-4">
      <button-blue @click="$emit('save')" class="mr-2">Save</button-blue>
      <button-white @click="$emit('cancel')">Cancel</button-white>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonBlue from "@components/buttons/button-blue.vue";
import ButtonWhite from "@components/buttons/button-white.vue";
</script>

<style lang="scss" scoped>
.add-client-component-template {
  width: 100%;
  height: 100%;
}
</style>
