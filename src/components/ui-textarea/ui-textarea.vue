<template>
    <v-textarea class="ui-textarea" hide-details></v-textarea>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.ui-textarea {
    &:deep().v-field__overlay {
        opacity: 0 !important;
    }

    &:deep().v-field__outline {

        &::before {
            border: 1px solid black;
            border-radius: 4px;
        }

        &::after {
            opacity: 0;
        }
    }
}
</style>