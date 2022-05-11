<template>
  <div class="ui-file-input">
    <input
      v-show="false"
      ref="input"
      @change="uploadFile"
      type="file"
      :accept="props.accept"
    />
    <component
      :is="buttonComponent"
      class="mr-2"
      :size="props.buttonSize"
      :append-icon="props.buttonIcon"
      @click="clickHandler"
      >{{props.buttonText}}</component
    >
    <label class="text-text-secondary">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import ButtonBlue from "../buttons/button-blue.vue";
import ButtonGreen from "../buttons/button-green.vue";
import ButtonWhite from "../buttons/button-white.vue";

interface IProps {
  accept?: string;
  buttonText?: string;
  buttonType?: "blue" | "white" | "green";
  buttonSize?: string;
  buttonIcon?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  accept: "",
  buttonText: "UPLOAD",
  buttonSize: "default",
  buttonType: "blue",
  buttonIcon: "",
});

const emit = defineEmits<{
  (e: "upload", files: FileList): void;
}>();

const input = ref(null);

const buttonComponent = computed(() => {
  switch (props.buttonType) {
    case "blue":
      return ButtonBlue;
    case "white":
        return ButtonWhite
    case "green":
        return ButtonGreen
  }
});

const clickHandler = () => {
  input.value.click();
};

const uploadFile = (e: any) => {
  emit("upload", e.target.files);
  input.value.value = null
};

</script>

<style lang="scss" scoped></style>
