<template>
  <scroll-box-2>
    <v-row no-gutters align="center">
      <v-col>
        <h2 class="font-weight-light text-h4 text-text-primary">
          General Settings
        </h2>
      </v-col>
      <v-col>
        <button-blue>SAVE</button-blue>
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <v-col cols="4">
        <input-with-label label="STUDIO NAME">
          <ui-text-input></ui-text-input>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <v-col>
        <h3 class="font-weight-regular text-h6 text-text-primary">
          Production Settings
        </h3>
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <ui-checkbox
        >Migrate Color Reference
        <v-tooltip
          ><template v-slot:activator="{ props }">
            <v-icon color="text-secondary" size="16" class="ml-3" v-bind="props"
              >mdi-alpha-i-circle</v-icon
            >
          </template>
          <span>Tooltip</span>
        </v-tooltip></ui-checkbox
      >
    </v-row>

    <v-row class="mt-7" no-gutters>
      <v-col cols="3">
        <input-with-label label="PRODUCT IMPORT STATUS">
          <ui-dropdown></ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row class="mt-7" no-gutters>
      <v-col cols="5">
        <ui-table :table-model="table" :table-styles="tableStyles">
          <template #header>
            <table-header-item :styles="tableHeaderItemStyles"
              >PRODUCTION TYPES</table-header-item
            >
            <table-header-item :styles="tableHeaderItemStyles2"
              >CATEGORY</table-header-item
            >
            <table-header-item :styles="tableHeaderItemStyles2"
              >ID</table-header-item
            >
            <table-header-item
              :styles="tableHeaderItemStyles"
            ></table-header-item>
          </template>

          <template #item="data">
            <table-body-item class="d-flex" :styles="tableBodyItemStyle">
              <ui-switch class="production-type-switch mr-3"></ui-switch>
              {{ data.item.productionType }}</table-body-item
            >
            <table-body-item :styles="tableBodyItemStyle2">{{
              data.item.category
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle2">{{
              data.item.id
            }}</table-body-item>
            <table-body-item :styles="tableBodyItemStyle2">
              <v-icon class="edit-icon">mdi-pencil</v-icon>
            </table-body-item>
          </template>
        </ui-table>

        <button-white size="small" class="mt-4"
          >ADD PRODUCTION TYPE</button-white
        >
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <v-col>
        <h3 class="font-weight-regular text-h6 text-text-primary">
          VPI Settings
        </h3>
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <v-col cols="3">
        <input-with-label label="PAST DUE ACTION">
          <ui-dropdown></ui-dropdown>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row class="mt-5" no-gutters>
      <v-col cols="3">
        <input-with-label label="STUDIO LOGO">
          <v-img :src="studioLogo" aspectRatio="1/1" width="200"></v-img>
          <div class="d-flex align-center">
            <ui-file-input @upload="uploadStudioLogo" :value="studioLogo" button-type="white" button-text="CHANGE" button-size="small" accept="image/png, image/jpeg, image/jpg, image/jpe"></ui-file-input>
            <span @click="deleteStudioLogo" class="delete-image-btn text-text-primary">Delete</span>
          </div>
          <span class="text-text-secondary mt-2" style="font-size: 13px">JPG, JPE, JPEG and PNG ONLY</span>
        </input-with-label>
      </v-col>
    </v-row>
  </scroll-box-2>
</template>

<script lang="ts" setup>
import ButtonBlue from "@/components/buttons/button-blue.vue";
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import UiDropdown from "@/components/ui-dropdown/ui-dropdown.vue";
import { BodyRowModel } from "@/components/ui-table/models/BodyRowModel";
import { TableModel } from "@/components/ui-table/models/TableModel";
import { TableStylesModel } from "@/components/ui-table/models/TableStylesModel";
import UiTable from "@components/ui-table/ui-table.vue";
import TableHeaderItem from "@components/ui-table/table-header-item.vue";
import TableBodyItem from "@components/ui-table/table-body-item.vue";
import { reactive, ref } from "@vue/reactivity";
import UiSwitch from "@/components/ui-switch/ui-switch.vue";
import ButtonWhite from "@/components/buttons/button-white.vue";
import UiFileInput from "@/components/ui-file-input/ui-file-input.vue";

const studioLogo = ref("")

const table = reactive(
  new TableModel({
    bodyRows: [
      new BodyRowModel({
        item: {
          id: "1",
          productionType: "On Model",
          category: "Model",
        },
      }),
      new BodyRowModel({
        item: {
          id: "2",
          productionType: "Mannequin",
          category: "Model",
        },
      }),
      new BodyRowModel({
        item: {
          id: "3",
          productionType: "Flats",
          category: "Model",
        },
      }),
    ],
  })
);

const tableStyles = new TableStylesModel({
  headerStyles: {
    gridTemplateColumns: "3fr 2fr 1fr 1fr",
  },
  rowStyles: {
    gridTemplateColumns: "3fr 2fr 1fr 1fr",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    width: "100%",
    backgroundColor: "transparent",
    transition: "background-color 0.15s linear",
    position: "relative",
    zIndex: 2,
  },
  hoverRowStyles: {
    backgroundColor: "#f3f3f3",
  },
});

const tableHeaderItemStyles = {
  whiteSpace: "nowrap",
  backgroundColor: "#dedede",
  color: "rgb(var(--v-theme-text-primary))",
  fontSize: "14px",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  padding: "5px 20px",
};

const tableHeaderItemStyles2 = {
  whiteSpace: "nowrap",
  backgroundColor: "#dedede",
  color: "rgb(var(--v-theme-text-primary), 0.5)",
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

const tableBodyItemStyle2 = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: "rgb(var(--v-theme-text-primary), 0.5)",
  padding: "5px 20px",
  display: "flex",
  alignItems: "center",
};

const uploadStudioLogo = (files: FileList) => {
    studioLogo.value = URL.createObjectURL(files[0])
}

const deleteStudioLogo = () => {
    URL.revokeObjectURL(studioLogo.value)
    studioLogo.value = ""
}
</script>

<style lang="scss" scoped>
.production-type-switch {
  height: 30px !important;
  flex: 0 0 40px;

  &:deep().v-selection-control {
    height: 30px;
  }
  &:deep().v-label {
    display: none;
  }
}

.delete-image-btn {
    cursor: pointer;
    text-decoration: underline;
    font-size: 13px;
}

.edit-icon {
    cursor: pointer;
    transition: all 0.15s linear;

    &:hover {
        color: rgb(var(--v-theme-text-primary))
    }
}
</style>
