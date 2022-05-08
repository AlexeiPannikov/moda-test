<template>
    <div class="scroll-box-wrap">
        <div class="scroll-box" ref="scrollBox" :style="{ overflowY: props.isScrollOff ? 'visible' : 'auto', overflowX: 'visible' }">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, onUpdated, watch } from 'vue';

interface IProps {
    maxHeight?: string,
    isScrollOff?: boolean,
    isScrollLeft?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    maxHeight: "",
    isScrollOff: false,
    isScrollLeft: false
})

const scrollBox = <Ref<HTMLElement>>ref(null)

const scrollThumbBack = ref('rgba(123, 123, 123, 1)')

const toggleVisibleScroll = (event: any) => {
    if (scrollBox.value.contains(event.target)) {
        scrollThumbBack.value = 'rgba(123, 123, 123, 1)';
    }
    else {
        scrollThumbBack.value = 'rgba(123, 123, 123, 0)'
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

const getScale = computed(() => {
    return props.isScrollLeft ? -1 : 1
})

onMounted(() => {
    setTimeout(() => {
        setMaxHeight()
    }, 100)
    addEventListener('resize', setMaxHeight)
    // addEventListener('mousemove', toggleVisibleScroll)
})

onUpdated(() => {
    setMaxHeight()
})

watch(scrollBox, () => {
    setMaxHeight()
})

onUnmounted(() => {
    removeEventListener('resize', setMaxHeight)
    // removeEventListener('mousemove', toggleVisibleScroll)
})
</script>

<style lang="scss" scoped>
.scroll-box-wrap {
    height: 100%;
    flex-grow: 1;


    .scroll-box {
        overflow-y: auto;
        overflow-x: visible;
        transform: scaleX(v-bind(getScale));

        &:deep()>* {
            transform: scaleX(v-bind(getScale));
        }

        &::-webkit-scrollbar-track {
            background: white;
            border-radius: 4px;
        }

        &::-webkit-scrollbar {
            border-radius: 4px;
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: v-bind(scrollThumbBack);
            border-radius: 4px;
        }
    }
}
</style>