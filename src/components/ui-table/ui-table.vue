<template>
  <div class="table" :style="props.tableStyles.tableStyle">

    <!-- TABLE HEADER  -->
    <div class="table-header" :style="props.tableStyles.headerStyles">
      <slot name="header"></slot>
    </div>

    <!-- TABLE  BODY  -->
    <div v-if="props.tableModel.bodyRows.length" class="table-body-wrap" :style="props.tableStyles.bodyStyles">
      <scroll-box-2 :is-scroll-off="!props.isScrollOn" :max-height="props.scrollHeight" :is-scroll-left="isScrollLeft">
        <transition-group name="list" mode="in-out">
          <div class="body-row" :style="props.tableStyles.rowStyles" :class="{ active: row.isActive }"
            @click="clickRowHandler(row)" v-for="row in props.tableModel.bodyRows" :key="row.item.id">
            <slot name="item" :item="row.item" />
          </div>
        </transition-group>
      </scroll-box-2>
    </div>
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
import ScrollBox2 from "@components/scroll-box/scroll-box-2.vue";

interface Props {
  tableModel: TableModel;
  tableStyles: TableStylesModel;
  scrollHeight?: string,
  isScrollOn?: boolean,
  isScrollLeft?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tableModel: () => new TableModel(),
  tableStyles: () => new TableStylesModel(),
  scrollHeight: "100%",
  isScrollOn: false,
  isScrollLeft: false
});

const emit = defineEmits<{
  (e: "onRowClick", data: any): void;
}>();

const hoverRowColor = (props.tableStyles.hoverRowStyles as any).backgroundColor
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
  display: flex;
  flex-direction: column;
  background-color: white;

  .table-header {
    width: 100%;
    display: grid;

    .table-header-item:not(:last-child) {
      margin-right: 2px;
    }
  }

  .table-body-wrap {
    flex-grow: 1;
    .body-row {
      display: grid;

      &:hover {
        background-color: v-bind(hoverRowColor) !important;
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
        background-color: v-bind(activeRowBack) !important;
      }

      // &::after {
      //   content: "";
      //   display: block;
      //   position: absolute;
      //   z-index: 1;
      //   background-color: v-bind(activeRowBack);
      //   right: -20px;
      //   top: 0;
      //   height: 103%;
      //   width: 20px;
      //   clip-path: polygon(0 0, 0% 100%, 65% 50%);
      //   transition: background-color 0.15s linear;
      // }
    }
  }
}
</style>