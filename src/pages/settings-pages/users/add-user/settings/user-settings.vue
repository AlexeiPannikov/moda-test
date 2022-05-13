<template>
  <user-page-template
    @change-invite="changeInvite"
    @save="save"
    @cancel="cancel"
  >
    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="FIRST NAME">
          <ui-text-input label="Add user's first name"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label class="mt-9" label="LAST NAME">
          <ui-text-input label="Add user's last name"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="6">
        <input-with-label class="mt-9 w-75" label="EMAIL">
          <ui-text-input label="Add user's email"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="4" class="d-flex align-end">
        <input-with-label class="mt-9" label="ADD PHOTO">
          <ui-file-input
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
            v-model="currentRoleId"
            :items="roleList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label class="mt-9" label="EMPLOYMENT">
          <ui-dropdown
            v-model="currentEmploymentId"
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
            v-model="currentUserTypeId"
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
import { reactive, ref } from "@vue/reactivity";
import UserPageTemplate from "../components/user-page-template.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiFileInput from "@/components/ui-file-input/ui-file-input.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";

const isInviteUser = ref(false);

const currentRoleId = ref(null);
const currentEmploymentId = ref(null);
const currentUserTypeId = ref(null);

const roleList = reactive([
  new DropdownItemModel({ id: 1, name: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3" }),
]);

const employmentList = reactive([
  new DropdownItemModel({ id: 1, name: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3" }),
]);

const userTypeList = reactive([
  new DropdownItemModel({ id: 1, name: "test1" }),
  new DropdownItemModel({ id: 2, name: "test2" }),
  new DropdownItemModel({ id: 3, name: "test3" }),
]);

const changeInvite = (value: boolean) => {
  isInviteUser.value = value;
};

const save = () => {};

const cancel = () => {};
</script>

<style lang="scss" scoped></style>
