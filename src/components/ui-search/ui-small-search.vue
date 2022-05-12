<template>
  <div
    @click="isOpenSearch = true"
    v-click-outside="closeSearch"
    class="search-input-wrap d-flex align-center"
    style="cursor: pointer"
  >
    <img :src="SearchIcon" />
    <input @input="(e) => emit('update:modelValue', (e as any).target.value)" :value="props.modelValue" :class="{ active: isOpenSearch }" type="text" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import SearchIcon from "@assets/icons/search-big.svg";

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue'])

const isOpenSearch = ref(false);

const closeSearch = () => {
  if (!props.modelValue) {
    isOpenSearch.value = false;
  }
};
</script>

<style lang="scss" scoped>
.search-input-wrap {
  input {
    border-bottom: 1px solid rgb(var(--v-theme-text-secondary));
    margin-left: 10px;
    width: 0;
    transition: width 0.2s ease-in-out;

    &:focus {
      outline: none;
    }
  }

  .active {
    width: 208px;
  }
}
</style>
