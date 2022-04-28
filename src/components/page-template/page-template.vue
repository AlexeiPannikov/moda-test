<template>
    <div class="page-template">
        <div class="toolbar">
            <slot name="toolbar" />
        </div>
        <slot />
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.page-template {
    padding: 40px 50px 20px 50px;
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;

    .toolbar {
        margin-bottom: 22px;
    }
}
</style>