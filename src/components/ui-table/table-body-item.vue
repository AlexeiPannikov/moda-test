<template>
  <div :style="{ width: props.width }" class="table-body-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "table-body-item",
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

.table-body-item {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #343545;
  padding-left: 20px;

  &:last-child {
    margin-right: 0;
  }
}

@media (max-width: 374px) {
  .table-body-item {
    margin-right: 0;
  }
}
</style>