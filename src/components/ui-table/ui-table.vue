import { toRefs } from 'vue';
<template>
  <div class="table" :style="props.tableStyles.tableStyle">
    <!-- TABLE HEADER  -->
    <div class="table-header" :style="props.tableStyles.headerStyles">
      <slot name="header"></slot>
    </div>

    <!-- TABLE  BODY  -->
    <transition-group name="list" mode="in-out">
      <div class="body-row" :style="props.tableStyles.rowStyles" :class="{ active: row.isActive }" @click="clickRowHandler(row)"
        v-for="row in props.tableModel.bodyRows" :key="row.item.id">
        <slot name="item" :item="row.item" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { BodyRowModel } from "./models/BodyRowModel";
import { TableModel } from "./models/TableModel";
import { TableStylesModel } from "./models/TableStylesModel";

export default {
  name: "custom-table",
};
</script>

<script lang="ts" setup>
interface Props {
  tableModel: TableModel;
  tableStyles: TableStylesModel
}

const props = withDefaults(defineProps<Props>(), {
  tableModel: () => new TableModel(),
  tableStyles: () => new TableStylesModel()
});

const emit = defineEmits<{
  (e: "onRowClick", data: any): void;
}>();

const activeRowBack = (props.tableStyles.activeRowStyles as any).backgroundColor
const activeRowColor = (props.tableStyles.activeRowStyles as any).color

const clickRowHandler = (row: BodyRowModel) => {
  props.tableModel.setActiveRow(row.item.id);
  emit('onRowClick', row.item)
};
</script>

<style lang="scss" scoped>
.list-enter {
  opacity: 1;
}

.list-enter-active {
  opacity: 0;
  transition: all 0.3s ease;
}

.list-enter-to {
  opacity: 1;
}

.list-leave-active {
  opacity: 1;
  transition: all 0.3s ease;
}

.list-leave-to {
  opacity: 0;
}

.table {
  background-color: white;

  .table-header {
    width: 100%;
    display: grid;

    .table-header-item:not(:last-child) {
      margin-right: 2px;
    }
  }

  .body-row {
    display: grid;

    &:hover {
      background-color: #f3f3f3;
    }

    &::after {
      content: "";
      display: block;
      z-index: -5;
      transition: background-color 0.15s linear;
    }
  }

  .active {
    background-color: v-bind(activeRowBack) !important;

    &:deep()>div {
      color: v-bind(activeRowColor) !important;
    }

    &:hover {
      background-color: var(--main-color);
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 1;
      background-color: var(--main-color);
      right: -20px;
      top: 0;
      height: 103%;
      width: 20px;
      clip-path: polygon(0 0, 0% 100%, 65% 50%);
      transition: background-color 0.15s linear;
    }
  }
}
</style>