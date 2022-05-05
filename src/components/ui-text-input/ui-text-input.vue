<template>
    <v-text-field class="ui-text-input" :label="props.label" variant="outlined" single-line hide-details></v-text-field>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        default: ""
    }
})
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
        box-shadow: 0px 0px 10px 0px #499FFF40;


        .v-field__outline {
            --v-field-border-opacity: 0.5 !important;
            --v-field-border-width: 1px;

            &>* {
                border-color: rgb(var(--v-theme-primary));
            }

        }
    }

    &:deep().v-field--dirty {
        .v-field__outline {
            --v-field-border-opacity: 0.5 !important;
            --v-field-border-width: 1px;

            &>* {
                border-color: rgb(var(--v-theme-primary));
            }

        }
    }
}
</style>