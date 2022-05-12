<template>
  <v-switch
    :label="props.label"
    color="primary"
    class="ui-switch"
    hide-details
    :disabled="props.disabled"
  ></v-switch>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  disabled: {
      type: Boolean
  }
});
</script>

<style lang="scss" scoped>
.ui-switch {
  &:deep().v-label {
    color: rgb(var(--v-theme-text-primary));
    opacity: 1;
  }
  --v-input-control-height: 30px !important;
}
</style>
