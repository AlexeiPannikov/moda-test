<template>
    <v-autocomplete v-model="modelValue" class="ui-dropdown" menu-icon="mdi-chevron-down" :items="props.items" :readonly="isEditing"
        :label="props.label" persistent-hint hide-details single-line>
    </v-autocomplete>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface IProps {
    label?: string,
    items?: any[],
    modelValue?: any
}

const props = withDefaults(defineProps<IProps>(), {
    label: "",
    items: () => { return [] }
})

const isEditing = ref(true)
</script>

<style lang="scss" scoped>
.ui-dropdown {
    &:deep().v-field--variant-filled {
        --v-input-control-height: 46px !important;
        --v-input-padding-top: 12px !important;
    }

    &:deep().v-label {
        top: 12px;
    }

    &:deep().v-field__overlay {
        opacity: 0;
    }

    &:deep().v-field__outline {
        &::before {
            border: 1px solid !important;
            border-radius: 4px;
        }

        &::after {
            display: none;
        }
    }

    &:deep().v-field--active {
        .v-field__outline {
            &::before {
                border-width: 1px !important;
                border-radius: 4px;
                border-color: rgb(var(--v-theme-primary)) !important;
            }
        }
    }
}
</style>