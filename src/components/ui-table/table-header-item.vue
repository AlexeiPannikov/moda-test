<template>
  <div class="table-header-item" :style="{ width: props.width }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "table-header-item",
};
</script>

<script lang="ts" setup>
import { withDefaults } from "vue";

interface Props {
  width?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
});
</script>

<style lang="scss" scoped>

.table-header-item {
  width: 100%;
  background-color: #dedede;
  color: black;
  font-size: 18px;
  font-weight: 500;
  min-width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
</style>