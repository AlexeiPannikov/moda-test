<template>
  <div class="save-changes mt-5">
    <button-blue @click="$emit('save')" class="mr-2" size="small">SAVE CHANGES</button-blue>
    <button-white @click="$emit('cancel')" size="small">CANCEL</button-white>
  </div>
</template>

<script lang="ts" setup>
import ButtonBlue from "@components/buttons/button-blue.vue";
import ButtonWhite from "@components/buttons/button-white.vue";
</script>

<style lang="scss" scoped></style>
