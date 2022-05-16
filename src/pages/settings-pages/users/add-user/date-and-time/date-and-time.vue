<template>
  <user-page-template>
    <v-row no-gutters>
      <v-col cols="10">
        <input-with-label class="mt-9" label="TIMEZONE">
          <ui-dropdown
            v-model="timezone"
            :items="timezoneList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="4">
        <input-with-label class="mt-9 w-75" label="DATE FORMAT">
          <ui-dropdown
            v-model="dateFormat"
            :items="dateFormatList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
        <ui-checkbox v-model="twentyFourTime" class="mt-5" label="24-hour Time"></ui-checkbox>
      </v-col>
      <v-col cols="4">
        <input-with-label class="mt-9 w-75" label="FIRST DAY OF WEEK">
          <ui-dropdown
            v-model="firstDayOfWeek"
            :items="firstDayList"
            placeholder="Select..."
          >
          </ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>
  </user-page-template>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import UserPageTemplate from "../components/user-page-template.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import { useTimezones } from "@/functions/useTimezones";
import { useAddUserStore } from "@/store/AddUserStore";

const store = useAddUserStore()
const {timezone, dateFormat, firstDayOfWeek, twentyFourTime} = toRefs(store.addUserModel.dateAndTime)
const timezoneList = reactive(new Array<DropdownItemModel>());

const dateFormatList = reactive([
  new DropdownItemModel({ id: 1, name: "DD/MM/YYYY", value: 'DD/MM/YYYY' }),
  new DropdownItemModel({ id: 2, name: "MM/DD/YYYY", value: 'MM/DD/YYYY' }),
]);

const firstDayList = reactive([
  new DropdownItemModel({ id: 1, name: "Monday", value: 'Monday' }),
  new DropdownItemModel({ id: 2, name: "Sunday", value: 'Sunday' }),
]);

let timezones = useTimezones();

const initTimezones = () => {
  timezones.forEach((item, i) => {
    timezoneList.push(new DropdownItemModel({ id: i, name: item, value: item }));
  });
};

initTimezones();
</script>

<style lang="scss" scoped></style>
