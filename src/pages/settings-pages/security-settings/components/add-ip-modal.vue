<template>
  <modal-window :is-open="isOpen">
    <template #header> Add IP </template>
    <input-with-label label="NAME" class="mt-5">
      <ui-text-input v-model="props.addIPModel.name"></ui-text-input>
    </input-with-label>
    <input-with-label label="IP ADDRESS TYPE" class="mt-5">
      <ui-dropdown
        :items="IPAddressTypes"
        v-model="props.addIPModel.addressType"
      ></ui-dropdown>
    </input-with-label>
    <input-with-label label="IPV4" class="mt-5">
      <ui-text-input
        v-model="props.addIPModel.IPv4"
        :rules="[inputRules.IP]"
        :hide-details="false"
      ></ui-text-input>
      <span class="ip-example text-text-secondary">Example: 104.192.143.1</span>
    </input-with-label>

    <template #footer>
      <button-white class="mr-5" @click="emit('cancel')">Cancel</button-white>
      <button-green @click="emit('add')" :disabled="!isCorrectData"
        >ADD</button-green
      >
    </template>
  </modal-window>
</template>

<script lang="ts" setup>
import ButtonWhite from "@/components/buttons/button-white.vue";
import ButtonGreen from "@/components/buttons/button-green.vue";
import ModalWindow from "../../components/modal-window.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import { AddIPModel } from "../models/AddIPModel";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { computed, reactive, ref } from "@vue/reactivity";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";
import { IPAddressTypesEnum } from "../models/IPAddressTypesEnum";
import { watch } from "vue";

interface IProps {
  isOpen: boolean;
  addIPModel: AddIPModel;
}
const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
  addIPModel: () => new AddIPModel(),
});

const emit = defineEmits(["add", "cancel"]);

const isCorrectData = computed(() => {
  return (
    props.addIPModel.name &&
    props.addIPModel.addressType &&
    inputRules.IP(props.addIPModel.IPv4) === true
  );
});

const IPAddressTypes = reactive([
  new DropdownItemModel({
    id: 1,
    name: IPAddressTypesEnum.Single,
    value: IPAddressTypesEnum.Single,
  }),
  new DropdownItemModel({
    id: 2,
    name: IPAddressTypesEnum.CIDR,
    value: IPAddressTypesEnum.CIDR,
  }),
]);

const inputRules = reactive({
  IP: (value: any) => {
    const pattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return pattern.test(value) || "Invalid IP.";
  },
});
</script>

<style lang="scss" scoped>
.ip-example {
  font-size: 12px;
}
</style>
