<template>
  <user-page-template>
    <v-row no-gutters>
      <v-col cols="10">
        <input-with-label class="mt-9" label="ADDRESS">
          <ui-text-input v-model="address" label="Add address"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="4">
        <input-with-label class="mt-9 w-75" label="ZIP">
          <ui-text-input v-model="zip" label="Add zip code"></ui-text-input>
        </input-with-label>
      </v-col>
      <v-col cols="6">
        <input-with-label class="mt-9" label="CITY">
          <ui-text-input v-model="city" label="Add city"></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="5">
        <input-with-label class="mt-9" label="PHONE">
          <div class="phone d-flex">
            <ui-text-input
              ref="phoneCodeInput"
              v-model="phoneCode"
              v-maska="'+###'"
              class="w-25 mr-5"
              label="Code"
            ></ui-text-input>
            <ui-text-input
              ref="phoneNumberInput"
              v-model="phoneNumber"
              class="w-75"
              label="Add phone"
            ></ui-text-input>
          </div>
        </input-with-label>
      </v-col>
      <v-col cols="5" class="justify-end d-flex">
        <input-with-label class="mt-9 w-75" label="COUNTRY">
          <ui-dropdown
            v-model="country"
            :items="countries"
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
import UiFileInput from "@/components/ui-file-input/ui-file-input.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { DropdownItemModel } from "@/components/ui-dropdown/DropdownItemModel";
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import { onMounted, watch } from "vue";
import { useCountriesStore } from "@/store/CountriesStore";
import { ContactInfoModel } from "./models/ContactInfoModel";
import { useAddUserStore } from "@/store/AddUserStore";

const countriesStore = useCountriesStore();
const addUserStore = useAddUserStore();
const { address, city, country, phone, phoneCode, phoneNumber, zip } = toRefs(
  addUserStore.addUserModel.contactInfo
);
// const contactInfoModel = reactive(new ContactInfoModel());
// const {address, city, country, phone, phoneCode, phoneNumber, zip} = toRefs(contactInfoModel)
const countries = reactive(new Array<DropdownItemModel>());
const phoneNumberInput = ref(null);
const phoneCodeInput = ref(null);

onMounted(async () => {
  await countriesStore.getCountries();
  for (let i in countriesStore.countriesNames) {
    countries.push(
      new DropdownItemModel({
        id: Number(i),
        name: countriesStore.countriesNames[i],
        value: countriesStore.countriesNames[i],
      })
    );
  }
});

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

watch(phoneCode, () => {
  if (phoneCode.value.toString().length === 4) {
    phoneNumberInput.value.$el.querySelector("input").focus();
  }
});

watch(phoneNumber, () => {
  if (phoneNumber.value.toString().length === 0) {
    phoneCodeInput.value.$el.querySelector("input").focus();
  }
});
</script>

<style lang="scss" scoped></style>
