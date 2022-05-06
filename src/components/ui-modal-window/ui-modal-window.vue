<template>
    <teleport to='body'>
        <Transition name='fade'>
            <div v-if="props.isOpen" class="ui-modal-window-wrap">
                <div class="ui-modal-window px-4 py-4" :style="props.styles">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </teleport>
</template>

<script lang="ts" setup>
interface IProps {
    isOpen: boolean;
    styles?: {}
}
const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
    styles: () => { return {}}
})
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;

    .ui-modal-window {
        background-color: white;
    }
}
</style>