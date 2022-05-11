<template>
    <v-btn class="blue-button" :disabled="props.disabled" :append-icon="appendIcon" :size="props.size" color="primary" flat>
        <slot />
    </v-btn>
</template>

<script lang="ts" setup>
interface IProps {
    size?: string | number,
    appendIcon?: string,
    disabled?: boolean,
}
const props = withDefaults(defineProps<IProps>(), {
    size: "default",
    appendIcon: null,
    disabled: false
})
</script>

<style lang="scss" scoped>
.blue-button {
    &:hover {
        box-shadow: 0px 0px 10px rgba(73, 159, 255, 0.5);
        ;
    }

    &:active {
        background-color: rgb(var(--v-theme-primary-darken)) !important;
    }
}

.v-btn--disabled {
    opacity: 0.5 !important;
}
</style>