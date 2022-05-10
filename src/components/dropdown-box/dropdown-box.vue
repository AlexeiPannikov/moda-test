<template>
    <div v-if="isOpen" class="dropdown-box" ref="dropdown" :style="position">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from '@vue/reactivity';
import { getCurrentInstance, onMounted, onUpdated } from 'vue';
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})
const context = getCurrentInstance()
const dropdown = ref(null)
const position = reactive(
    {
        left: 'auto',
        right: 'auto',
        top: 'auto',
        bottom: 'auto'
    }
)
const getTop = computed(() => {
    const parentEl = context.parent.vnode?.el
    const bottomPosition = parentEl?.getBoundingClientRect().bottom
    return `${bottomPosition}px`
})
const getRight = computed(() => {
    if (!dropdown.value) return 'auto';
    const bodyRight = document.body.getBoundingClientRect().right
    if (dropdown?.value.getBoundingClientRect().right >= bodyRight) {
        return '0'
    }
    return 'auto'
})
const setPosition = () => {
    position.top = getTop.value
    position.right = getRight.value
}
onUpdated(() => {
    setPosition()
})
</script>

<style lang="scss" scoped>
.dropdown-box {
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.25) !important;
    background-color: white;
    padding: 10px 0;
    position: absolute;
    z-index: 100;
}
</style>