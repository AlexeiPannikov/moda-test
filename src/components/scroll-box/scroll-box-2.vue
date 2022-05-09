<template>
    <div class="scroll-box-wrap">
        <div class="scroll-box" ref="scrollBox"
            :style="{ overflowY: props.isScrollOff ? 'visible' : 'auto', overflowX: 'visible' }">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, Ref, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, onUpdated, watch } from 'vue';

interface IProps {
    colorThumb?: string,
    colorTrack?: string,
    maxHeight?: string,
    isScrollOff?: boolean,
    isScrollLeft?: boolean,
    hideScroll?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    colorThumb: 'rgba(123, 123, 123, 1)',
    colorTrack: 'white',
    maxHeight: "",
    isScrollOff: false,
    isScrollLeft: false,
    hideScroll: false
})

const scrollBox = <Ref<HTMLElement>>ref(null)

const scrollThumbBack = computed(() => {
    if (props.hideScroll) {
        let colorNumbersArr = props.colorThumb.match(/\d+/g);
        colorNumbersArr.splice(3, 1, '0')
        console.log(`rgba(${colorNumbersArr.join(', ')})`);
        return `rgba(${colorNumbersArr.join(', ')})`
    }
    return props.colorThumb
})

const scrollTrackBack = computed(() => {
    if (props.hideScroll) {
        return 'transparent'
    }
    return props.colorTrack
})

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
})

onUpdated(() => {
    setMaxHeight()
})

watch(scrollBox, () => {
    setMaxHeight()
})

onUnmounted(() => {
    removeEventListener('resize', setMaxHeight)
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
            background: v-bind(scrollTrackBack);
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