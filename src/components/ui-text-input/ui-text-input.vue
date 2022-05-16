<template>
  <v-text-field
    class="ui-text-input"
    :label="props.label"
    variant="outlined"
    single-line
    :hide-details="props.hideDetails"
  ></v-text-field>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  hideDetails: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.ui-text-input {
  --v-input-control-height: 46px !important;

  &:deep().v-field__field {
    --v-input-padding-top: 6px !important;

    .v-label {
      top: 25%;
    }
  }

  &:deep().v-field:hover {
    .v-field__outline {
      --v-field-border-opacity: 0.7 !important;
    }
  }

  &:deep() .v-field--focused {
    outline: none;
    box-shadow: 0px 0px 10px 0px #499fff40;

    .v-field__outline {
      --v-field-border-opacity: 0.5 !important;
      --v-field-border-width: 1px;

      & > * {
        border-color: rgb(var(--v-theme-primary));
      }
    }
  }

  &:deep().v-field--dirty {
    .v-field__outline {
      --v-field-border-opacity: 0.5 !important;
      --v-field-border-width: 1px;

      & > * {
        border-color: rgb(var(--v-theme-primary));
      }
    }
  }

  &:deep().v-field--error {
    .v-field__outline {

      & > * {
        border-color: rgb(var(--v-theme-error)) !important;
      }
    }
  }

  &:deep().v-input__details {
      margin-bottom: 0 !important;
  }

  &:deep().v-field__outline__start {
    border-radius: 4px 0 0 4px;
  }
  
  &:deep().v-field__outline__end {
    border-radius: 0 4px 4px 0;
  }
}
</style>
