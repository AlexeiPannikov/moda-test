<template>
    <teleport to="body">
        <transition name="fade" appear>
            <div class="modal-window-wrap" v-if="isOpen">
                <div class="modal-window" v-click-outside="clickOutsideHandler">
                    <div class="modal-header">
                        <slot name="header" />
                        <div @click="emit('close')" class="icon-close">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <slot />
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts" setup>


interface IProps {
    isOpen: boolean
    isCloseClickOutside?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    isOpen: false,
    isCloseClickOutside: false
})

const emit = defineEmits<{
    (e: 'close'): void
}>()

const clickOutsideHandler = () => {
    if (props.isCloseClickOutside) {
        emit('close')
    }
}

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.modal-window-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);

    .modal-window {
        box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
        background-color: white;
        border-radius: 4px;
        padding: 24px 24px 20px;
        min-width: 320px;

        .modal-header {
            font-size: 35px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            font-weight: 300;
            white-space: nowrap;
            color: var(--text-main-color);

            .icon-close {
                width: 20px;
                height: 20px;
                position: relative;
                cursor: pointer;
                margin-left: 30px;

                span {
                    display: block;
                    height: 2px;
                    width: 100%;
                    background-color: #8a8a8a;
                    position: absolute;
                    top: calc(50% - 2px);
                    opacity: 0.7;
                    transition: opacity 0.15s linear;

                    &:first-child {
                        transform: rotate(45deg)
                    }

                    &:last-child {
                        transform: rotate(-45deg)
                    }
                }

                &:hover span {
                    opacity: 1;
                }
            }
        }
    }
}
</style>