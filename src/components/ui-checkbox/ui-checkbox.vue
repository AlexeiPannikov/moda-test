<template>
    <div class="ui-checkbox-wrap d-flex align-center">
        <input class="ui-checkbox" :class="{ active: props.modelValue }" type="checkbox" :id="id.toString()"
            :value="props.modelValue" @input="click" />
        <label class="text-text-primary" :for="id.toString()">{{ label }}</label>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    id: {
        type: Number,
        default: 0
    },
    label: {
        type: String
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const click = (event: any) => {
    console.log(event.srcElement.checked);
    emit('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" scoped>
.ui-checkbox-wrap {
    cursor: pointer;

    .ui-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .ui-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .ui-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #C4C4C4;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .active+label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
}
</style>