<template>
    <teleport to='.v-application'>
        <transition name='fade'>
            <div v-if="props.isOpen" class="ui-modal-window-wrap py-5">
                <scroll-box-2 hide-scroll class="modal-scroll w-100">
                    <div class="ui-modal-window px-8 py-8" v-click-outside="close" :style="props.styles">
                        <slot name="header"></slot>
                        <slot></slot>
                        <slot name="footer"></slot>
                    </div>
                </scroll-box-2>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts" setup>
import ScrollBox2 from '../scroll-box/scroll-box-2.vue';
interface IProps {
    isOpen: boolean;
    styles?: {}
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
    styles: () => { return {} }
})

const emit = defineEmits(['close'])

let isFirstLoading = false;

const close = () => {
    if (isFirstLoading) {
        emit('close')
    }
    isFirstLoading = true
}
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s linear;
}

.fade-enter-to {
    opacity: 1;
}

.ui-modal-window-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;

    .modal-scroll {

        &:deep().scroll-box {
            width: 100%;
        }

        .ui-modal-window {
            background-color: white;
            margin: 0 auto;
        }
    }
}
</style>