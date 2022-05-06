<template>
    <div class="scroll-box-wrap">
        <div class="scroll-box" ref="scrollBox" :style="{ overflowY: props.isScrollOff ? 'unset' : 'scroll' }">
            <slot />
        </div>
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

const scrollBarWidth = ref('0')

const toggleVisibleScroll = (event: any) => {
    if (scrollBox.value.contains(event.target)) {
        scrollBarWidth.value = '6px';
    }
    else {
        scrollBarWidth.value = '0'
    }
}

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
    setTimeout(() => {
        setMaxHeight()
    }, 100)
    addEventListener('resize', setMaxHeight)
    addEventListener('mousemove', toggleVisibleScroll)
})

onUpdated(() => {
    setMaxHeight()
})

watch(scrollBox, () => {
    setMaxHeight()
})

onUnmounted(() => {
    removeEventListener('resize', setMaxHeight)
    removeEventListener('mousemove', toggleVisibleScroll)
})
</script>

<style lang="scss" scoped>
.scroll-box-wrap {
    height: 100%;
    flex-grow: 1;

    .scroll-box {
        overflow-y: overlay;
        overflow-x: overlay;

        &::-webkit-scrollbar-track {
            background: white;
            border-radius: 4px;
        }

        &::-webkit-scrollbar {
            background: #7B7B7B;
            border-radius: 4px;
            width: v-bind(scrollBarWidth);
            position: absolute;
        }

        &::-webkit-scrollbar-thumb {
            background: #7B7B7B;
            border-radius: 4px;
        }
    }
}
</style>