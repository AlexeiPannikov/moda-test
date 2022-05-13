<template>
  <user-page-template>
    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">

      </v-col>
    </v-row>
  </user-page-template>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import UserPageTemplate from "../components/user-page-template.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";

</script>

<style lang="scss" scoped></style>
