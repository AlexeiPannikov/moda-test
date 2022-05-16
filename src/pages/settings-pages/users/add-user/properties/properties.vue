<template>
  <user-page-template>
    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">
        <input-with-label label="GENDER">
          <ui-dropdown v-model="gender" :items="genderList"></ui-dropdown>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="BUST">
          <ui-text-input v-model="bust"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">
        <input-with-label label="EYES">
          <ui-text-input v-model="eyes"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="HAIR">
          <ui-text-input v-model="hair"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">
        <input-with-label label="HEIGHT">
          <ui-text-input v-model="height"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="HIP">
          <ui-text-input v-model="hip"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">
        <input-with-label label="SHOE SIZE">
          <ui-text-input v-model="shoeSize"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="SIZE">
          <ui-text-input v-model="size"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4" class="mr-9">
        <input-with-label label="WAIST">
          <ui-text-input v-model="waist"></ui-text-input>
        </input-with-label>
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
import { useAddUserStore } from "@/store/AddUserStore";

const store = useAddUserStore();
const { bust, eyes, gender, hair, height, hip, shoeSize, size, waist } = toRefs(
  store.addUserModel.properties
);

const genderList = reactive([
  new DropdownItemModel({ id: 1, name: "Male", value: "Male" }),
  new DropdownItemModel({ id: 2, name: "Female", value: "Female" }),
]);
</script>

<style lang="scss" scoped></style>
