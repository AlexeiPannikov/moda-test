<template>
    <div class="nav-item-wrap">
        <div @click="clickHandler" class="nav-item" :class="activeClass">
            <div class="item-name">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

interface IProps {
    to?: {}
}

const props = withDefaults(defineProps<IProps>(), {
    to: null
})

const emit = defineEmits(['click'])

const route = useRoute()
const router = useRouter()

const activeClass = computed(() => {
    if (props.to && route.name === (props.to as any).name) {
        return 'active'
    }
})

const getColor = computed(() => {
    if (props.to && route.name === (props.to as any).name) {
        return 'rgb(var(--v-theme-primary))'
    }
})

const clickHandler = () => {
    if (props.to) {
        router.push(props.to)
    }
    emit('click')
}

</script>

<style lang="scss" scoped>
.nav-item-wrap {
    position: relative;
    height: 100%;

    .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        padding: 0 25px;
        height: 100%;
        position: relative;
        cursor: pointer;

        &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 4px;
            background-color: transparent;
            transition: all 0.15s linear;
        }

        &:hover::before {
            background-color: #f2f2f2;
        }

        .item-name {
            color: rgb(var(--v-theme-text-primary));
            font-weight: 500;
            font-size: 14px;
            display: flex;
            align-items: center;
        }

        &:hover .item-arrow {
            border-color: var(--main-color);
        }
    }

    .active::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: v-bind(getColor);
        transition: all 0.15s linear;
    }

    .active:hover::before {
        background-color: v-bind(getColor);
    }
}
</style>