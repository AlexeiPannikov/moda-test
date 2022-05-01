<template>
    <div class="page-template" ref="pageTemplate">
        <div class="toolbar">
            <slot name="toolbar" />
        </div>

        <div class="page-body" ref="pageBody">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, Ref, ref } from 'vue';

const pageTemplate = <Ref<HTMLElement>>ref(null)
const pageBody = <Ref<HTMLElement>>ref(null)

const setHeightBody = () => {
    const windowHeight = window.innerHeight
    const pageBodyTop = pageBody.value.getBoundingClientRect().top
    pageBody.value.style.height = `${windowHeight - pageBodyTop - 20}px`
}

onMounted(() => {
    setHeightBody()
    addEventListener('resize', setHeightBody)
})

onUnmounted(() => {
    removeEventListener('resize', setHeightBody)
})
</script>

<style lang="scss" scoped>
.page-template {
    padding: 40px 50px 20px 50px;
    max-height: 100%;

    .toolbar {
        margin-bottom: 22px;
        flex: 0 0 auto;
    }

    .page-body {
        flex: 1 1 100%;
    }
}
</style>