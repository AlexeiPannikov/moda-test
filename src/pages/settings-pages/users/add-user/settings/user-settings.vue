<template>
  <user-page-template>
    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="FIRST NAME">
          <ui-text-input
            v-model="firstName"
            label="Add user's first name"
          ></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label class="mt-9" label="LAST NAME">
          <ui-text-input
            v-model="lastName"
            label="Add user's last name"
          ></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="EMAIL">
          <ui-text-input
            v-model="email"
            label="Add user's email"
          ></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4" class="d-flex align-end">
        <input-with-label class="mt-9" label="ADD PHOTO">
          <ui-file-input
            @upload="setPhoto"
            button-icon="mdi-upload"
            accept="image/png, image/jpeg, image/jpg, image/jpe"
            >JPG, JPE, JPEG and PNG ONLY</ui-file-input
          >
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="ROLE">
          <ui-dropdown
            v-model="role"
            :items="roleList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label class="mt-9" label="EMPLOYMENT">
          <ui-dropdown
            v-model="employment"
            :items="employmentList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="USER TYPE">
          <ui-dropdown
            v-model="userType"
            :items="userTypeList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>
  </user-page-template>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "@vue/reactivity";
import UserPageTemplate from "../components/user-page-template.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiFileInput from "@/components/ui-file-input/ui-file-input.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";
import { SettingsModel } from "./models/SettingsModel";
import { useAddUserStore } from "@/store/AddUserStore";

const store = useAddUserStore()
const { email, employment, firstName, lastName, photo, role, userType } =
  toRefs(store.addUserModel.settings);

const roleList = reactive([
  new DropdownItemModel({ id: 1, name: "test1", value: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2", value: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3", value: "test3" }),
]);

const employmentList = reactive([
  new DropdownItemModel({ id: 1, name: "test1", value: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2", value: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3", value: "test3" }),
]);

const userTypeList = reactive([
  new DropdownItemModel({ id: 1, name: "test1", value: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2", value: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3", value: "test3" }),
]);

const setPhoto = (files: FileList) => {
  // const blob = new Blob([URL.createObjectURL(files[0])])
  // console.log(blob);
}
</script>

<style lang="scss" scoped></style>
