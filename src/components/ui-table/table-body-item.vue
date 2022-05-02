<template>
  <div :style="props.styles" class="table-body-item">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from "vue";

interface Props {
  styles: {};
}

const props = withDefaults(defineProps<Props>(), {
  styles: () => { return {} },
});
</script>

<style lang="scss" scoped>
.table-body-item {
}
</style>