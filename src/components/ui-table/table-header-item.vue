<template>
  <div class="table-header-item" :style="props.styles">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from "vue";

interface Props {
  styles: object;
}

const props = withDefaults(defineProps<Props>(), {
  styles: () => { return {} },
});
</script>

<style lang="scss" scoped>
.table-header-item {}
</style>