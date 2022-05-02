<template>
    <div class="scroll-box" ref="scrollBox" :style="{ overflowY: props.isScrollOff ? 'unset' : 'scroll' }">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, onUpdated, watch } from 'vue';

interface IProps {
    maxHeight?: string,
    isScrollOff?: boolean,
}

const props = withDefaults(defineProps<IProps>(), {
    maxHeight: "",
    isScrollOff: false
})

const scrollBox = <Ref<HTMLElement>>ref(null)

const setMaxHeight = () => {
    scrollBox.value.style.maxHeight = "1px"
    if (props.maxHeight) {
        scrollBox.value.style.maxHeight = props.maxHeight
        return
    }
    const maxHeight = scrollBox.value.parentElement.getBoundingClientRect().height
    scrollBox.value.style.maxHeight = `${maxHeight}px`
}

onMounted(() => {
    setMaxHeight()
    addEventListener('resize', setMaxHeight)
})

watch(scrollBox, () => {
    setMaxHeight()
})

onUnmounted(() => {
    removeEventListener('resize', setMaxHeight)
})
</script>

<style lang="scss" scoped>
.scroll-box {
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
        background: white;
        border-radius: 4px;
    }

    &::-webkit-scrollbar {
        background: #7B7B7B;
        border-radius: 4px;
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #7B7B7B;
        border-radius: 4px;
    }
}
</style>