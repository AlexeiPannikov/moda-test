<template>
  <modal-window-template :isOpen="props.isOpen">
    <template #header> Metadata Namespace </template>
    <input-with-label label="NAME">
      <ui-text-input label="Enter namespace name"></ui-text-input>
    </input-with-label>
    <input-with-label class="mt-9" label="NAMESPACE PREFIX">
      <ui-text-input label="Enter namespace prefix"></ui-text-input>
    </input-with-label>
    <input-with-label class="mt-9" label="XMLNS URI">
      <ui-text-input label="Enter namespace XMLNS URI"></ui-text-input>
    </input-with-label>
    <input-with-label class="mt-9" label="POOL SAMPLES">
      <span class="text-text-secondary"
        >Please input Namespace Prefix value to see the result</span
      >
    </input-with-label>
    <input-with-label class="mt-9" label="PROPERTIES">
      <ui-textarea></ui-textarea>
    </input-with-label>
  </modal-window-template>
</template>

<script lang="ts" setup>
import ModalWindowTemplate from "../modal-window-template.vue";
import InputWithLabel from "@components/input-with-label/input-with-label.vue";
import UiTextInput from "@components/ui-text-input/ui-text-input.vue";
import { reactive, ref } from "vue";
import { DropdownItemModel } from "@components/ui-dropdown/DropdownItemModel";
import UiTextarea from "@components/ui-textarea/ui-textarea.vue";

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
  new DropdownItemModel({
    id: 1,
    name: "SFTP - SSH File Transfer Protocol",
    value: "SFTP - SSH File Transfer Protocol",
  }),
  new DropdownItemModel({
    id: 2,
    name: "SFTP - SSH File Transfer Protocol W/Private Key",
    value: "SFTP - SSH File Transfer Protocol W/Private Key",
  }),
  new DropdownItemModel({
    id: 3,
    name: "SFTP - File Transfer Protocol",
    value: "SFTP - File Transfer Protocol",
  }),
]);
</script>

<style lang="scss" scoped></style>
