<template>
  <v-btn
    class="green-button"
    :append-icon="appendIcon"
    :size="props.size"
    color="green"
    flat
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts" setup>
interface IProps {
  size?: string | number;
  appendIcon?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  size: "default",
  appendIcon: null,
});
</script>

<style lang="scss" scoped>
.green-button {
  color: white !important;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 115, 11, 0.5);
  }

  &:active {
    background-color: rgb(var(--v-theme-green-darken)) !important;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.15) !important;
  }
}

.v-btn--disabled {
  opacity: 0.5 !important;
}
</style>
