<template>
    <add-client-component-template>
        <template #title>
            Metadata Namespace
            <button-green @click="openAddNamespaceModal" class="ml-2">ADD</button-green>
        </template>
    </add-client-component-template>

    <add-namespace-modal :is-open="isOpenModal" @close="isOpenModal = false" @save="save" @cancel="cancel">
    </add-namespace-modal>
</template>

<script lang="ts" setup>
import AddClientComponentTemplate from '../add-client-component-template.vue';
import ButtonGreen from '@/components/buttons/button-green.vue';
import AddNamespaceModal from './add-namespace-modal.vue';
import { ref } from '@vue/reactivity';

const isOpenModal = ref(false)

const openAddNamespaceModal = () => {
    isOpenModal.value = true
}

const save = () => {
    isOpenModal.value = false
}

const cancel = () => {
    isOpenModal.value = false
}
</script>

<style lang="scss" scoped>
</style>