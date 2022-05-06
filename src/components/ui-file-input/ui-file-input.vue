<template>
    <div class="ui-file-input">
        <input v-show="false" ref="input" type="file" :accept="props.accept" />
        <button-blue class="mr-2" append-icon="mdi-upload" @click="clickHandler">UPLOAD</button-blue>
        <label class="text-text-secondary">
            <slot></slot>
        </label>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ButtonBlue from '../buttons/button-blue.vue';

const props = defineProps({
    accept: {
        type: String,
        default: ""
    }
})

const input = ref(null)

const clickHandler = () => {
    input.value.click()
}
</script>

<style lang="scss" scoped>
</style>