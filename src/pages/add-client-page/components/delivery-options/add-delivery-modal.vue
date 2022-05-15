<template>
  <modal-window-template :isOpen="props.isOpen">
    <template #header> Add Delivery Option </template>
    <input-with-label label="NAME">
      <ui-text-input label="Enter delivery option name"></ui-text-input>
    </input-with-label>
    <input-with-label class="mt-9" label="METHOD">
      <ui-dropdown v-model="method" :items="methods" placeholder="Select...">
      </ui-dropdown>
    </input-with-label>
    <input-with-label class="mt-9" label="PROTOCOL">
      <ui-dropdown
        v-model="protocol"
        :items="protocols"
        placeholder="Select..."
      >
      </ui-dropdown>
    </input-with-label>
    <input-with-label class="mt-9" label="PORT">
      <ui-text-input label="Enter delivery option name"></ui-text-input>
    </input-with-label>
    <input-with-label class="mt-9" label="HOST">
      <ui-text-input label="Enter delivery option name"></ui-text-input>
    </input-with-label>
    <template #footer>
      <div class="modal-footer"></div>
    </template>
  </modal-window-template>
</template>

<script lang="ts" setup>
import ModalWindowTemplate from "../modal-window-template.vue";
import InputWithLabel from "@components/input-with-label/input-with-label.vue";
import UiTextInput from "@components/ui-text-input/ui-text-input.vue";
import UiDropdown from "@components/ui-dropdown/ui-dropdown.vue";
import { reactive, ref } from "vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";

interface IProps {
  isOpen: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
});

const method = ref(null);
const protocol = ref(null);

const methods = reactive([
  new DropdownItemModel({
    id: 1,
    name: "Google Cloud Storage",
    value: "Google Cloud Storage",
  }),
  new DropdownItemModel({ id: 2, name: "Amazon S3", value: "Amazon S3" }),
  new DropdownItemModel({ id: 3, name: "Bynder", value: "Bynder" }),
  new DropdownItemModel({ id: 4, name: "Cloudinary", value: "Cloudinary" }),
  new DropdownItemModel({ id: 5, name: "Box.Com", value: "Box.Com" }),
]);

const protocols = reactive([
  new DropdownItemModel({ id: 1, name: "SFTP - SSH File Transfer Protocol", value: 'SFTP - SSH File Transfer Protocol' }),
  new DropdownItemModel({
    id: 2,
    name: "SFTP - SSH File Transfer Protocol W/Private Key",
    value: 'SFTP - SSH File Transfer Protocol W/Private Key'
  }),
  new DropdownItemModel({ id: 3, name: "SFTP - File Transfer Protocol", value: 'SFTP - File Transfer Protocol' }),
]);
</script>

<style lang="scss" scoped></style>
