<template>
    <add-client-component-template>
        <template #title>
            Delivery Options
            <button-green @click="openAddDeliveryModal" class="ml-2">ADD</button-green>
        </template>
    </add-client-component-template>

    <add-delivery-modal :is-open="isOpenModal"></add-delivery-modal>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from '../add-client-component-template.vue';
import ButtonGreen from '@/components/buttons/button-green.vue';
import AddDeliveryModal from './add-delivery-modal.vue';
import { ref } from '@vue/reactivity';

const isOpenModal = ref(false)

const openAddDeliveryModal = () => {
    isOpenModal.value = true
}
</script>

<style lang="scss" scoped>
</style>