<template>
    <v-btn>
    </v-btn>
</template>

<script lang="ts" setup>
interface IProps {
    size?: string | number
}
const props = withDefaults(defineProps<IProps>(), {
    size: "default"
})
</script>

<style lang="scss" scoped>
.overview {

}
</style>