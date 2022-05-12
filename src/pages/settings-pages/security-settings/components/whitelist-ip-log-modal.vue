<template>
  <modal-window :max-width="'960px'" :is-open="isOpen">
    <template #header> IP Whitelist Log </template>
    <v-row no-gutters>
      <v-col class="d-flex">
        <ui-checkbox
          v-model="allowed"
          :id="3"
          label="Allowed"
          class="mr-4"
        ></ui-checkbox>
        <ui-checkbox v-model="denied" :id="4" label="Denied"></ui-checkbox>
      </v-col>
      <v-col class="d-flex justify-end">
        <ui-small-search v-model="searchText"></ui-small-search>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-3">
      <v-col>
        <ui-table
          :is-scroll-on="true"
          :scroll-height="null"
          :table-model="table"
          :table-styles="tableStyles"
        >
          <template #header>
            <table-header-item :styles="tableHeaderItemStyles"
              >APPLICATION NAME</table-header-item
            >
            <table-header-item :styles="tableHeaderItemStyles"
              >USER</table-header-item
            >
            <table-header-item :styles="tableHeaderItemStyles"
              >IP</table-header-item
            >
            <table-header-item :styles="tableHeaderItemStyles"
              >TIME</table-header-item
            >
            <table-header-item
              :styles="tableHeaderItemStyles"
            ></table-header-item>
          </template>

          <template #item="data">
            <table-body-item :styles="tableBodyItemStyle">{{
              data.item.applicationName
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
              data.item.user
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
              data.item.ip
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">{{
              data.item.time
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle">
              <v-icon @click="isOpenAddIPModal = true" style="cursor: pointer"
                >mdi-plus</v-icon
              >
            </table-body-item>
          </template>
        </ui-table>
      </v-col>
    </v-row>
    <template #footer>
      <button-white @click="emit('close')">Cancel</button-white>
    </template>
  </modal-window>

  <add-ip-modal
    :is-open="isOpenAddIPModal"
    :add-i-p-model="addIPData"
    @add="isOpenAddIPModal = false"
    @cancel="isOpenAddIPModal = false"
  ></add-ip-modal>
</template>

<script lang="ts" setup>
import ButtonWhite from "@/components/buttons/button-white.vue";
import ModalWindow from "../../components/modal-window.vue";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import UiSmallSearch from "@/components/ui-search/ui-small-search.vue";
import { reactive, ref } from "@vue/reactivity";
import { BodyRowModel } from "@/components/ui-table/models/BodyRowModel";
import { TableModel } from "@/components/ui-table/models/TableModel";
import { TableStylesModel } from "@/components/ui-table/models/TableStylesModel";
import UiTable from "@components/ui-table/ui-table.vue";
import TableHeaderItem from "@components/ui-table/table-header-item.vue";
import TableBodyItem from "@components/ui-table/table-body-item.vue";
import AddIpModal from "./add-ip-modal.vue";
import { AddIPModel } from "../models/AddIPModel";

interface IProps {
  isOpen: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
});

const emit = defineEmits(["close"]);

const searchText = ref("");
const allowed = ref(false);
const denied = ref(false);
const addIPData = reactive(new AddIPModel());
const isOpenAddIPModal = ref(false);

const table = reactive(
  new TableModel({
    bodyRows: [
      new BodyRowModel({
        item: {
          id: "1",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "1232314",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "12342",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "164578",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "56634",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "567679",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "74345234",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "97934",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "5679789557",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "456324",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "2354378",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "8794637",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "24370",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "444",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
      new BodyRowModel({
        item: {
          id: "450",
          applicationName: "name",
          user: "i@pixelmoda.net",
          ip: "217.19.219.34",
          time: "05/12/2022 9:18 AM",
        },
      }),
    ],
  })
);

const tableStyles = new TableStylesModel({
  headerStyles: {
    gridTemplateColumns: "2fr 2fr 2fr 2fr 1fr",
    backgroundColor: "#dedede",
    width: "100%",
  },
  rowStyles: {
    gridTemplateColumns: "2fr 2fr 2fr 2fr 1fr",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    width: "100%",
    backgroundColor: "transparent",
    transition: "background-color 0.15s linear",
    position: "relative",
    zIndex: 2,
  },
  bodyStyles: {
    height: "300px",
  },
  hoverRowStyles: {
    backgroundColor: "#f3f3f3",
  },
});

const tableHeaderItemStyles = {
  whiteSpace: "nowrap",
  color: "rgb(var(--v-theme-text-primary))",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  padding: "5px 20px",
};

const tableBodyItemStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: "rgb(var(--v-theme-text-primary))",
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
};
</script>

<style lang="scss" scoped>
.ip-example {
  font-size: 12px;
}
</style>
