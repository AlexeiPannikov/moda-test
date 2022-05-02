<template>
  <div class="pagination">
    <transition name="fade" mode="out-in">
      <div
        v-if="getPagesNumber > 1"
        @click="selectPage(getFirstPage)"
        :class="{ 'active-page': getFirstPage === props.current }"
        class="page"
      >
        {{ getFirstPage }}
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div
        v-if="getPagesNumber > 2"
        @click="selectPage(getSecondPage)"
        :class="{ 'active-page': getSecondPage === props.current }"
        class="page"
      >
        {{ getSecondPage }}
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div
        v-if="getPagesNumber > 3"
        @click="selectPage(getThirdPage)"
        :class="{ 'active-page': getThirdPage === props.current }"
        class="page"
      >
        {{ getThirdPage }}
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div
        v-if="getPagesNumber > 3 && getPagesNumber - getThirdPage > 1"
        class="page"
      >
        ...
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div
        v-if="getPagesNumber > 3 && getPagesNumber - props.current > 1"
        @click="selectPage(getPagesNumber)"
        class="page"
      >
        {{ getPagesNumber }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "pagination",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  size: number;
  count: number;
  current: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: 10,
  count: 0,
  current: 1,
});

const emits = defineEmits(["onSelect"]);

const getPagesNumber = computed(() => {
  return Math.ceil(props.count / props.size);
});

let getFirstPage = computed(() => {
  if (props.current === 1 || props.current === 2) return 1;
  if (props.current === getPagesNumber.value) return getPagesNumber.value - 2
  if (props.current >= 3) return getSecondPage.value - 1;
});

let getSecondPage = computed(() => {
  if (props.current > 1 && getPagesNumber.value !== props.current) return props.current;
  if (props.current === getPagesNumber.value) return getPagesNumber.value - 1
  return getFirstPage.value + 1;
});

let getThirdPage = computed(() => {
  if (getPagesNumber.value === props.current) return props.current;
  return getSecondPage.value + 1;
});

function selectPage(page: number) {
  if (page === props.current) return;
  emits("onSelect", page);
}
</script>

<style lang="scss" scoped>
.fade-enter {
}

.fade-enter-active {
  opacity: 0;
  transition: all 0.5s ease;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

.pagination {
  display: flex;

  .page {
    cursor: pointer;
    min-width: 50px;
    min-height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #f2f2f2;
    transition: all 0.15s linear;

    &:not(:last-child) {
      margin-right: 3px;
    }

    &:hover {
      background-color: #4e576d;
      color: #fff;
    }

    &:active {
      background-color: #212121;
    }
  }

  .active-page {
    background-color: #4e576d;
    color: #fff;
    cursor: auto;

    &:active {
      background-color: #4e576d;
    }
  }
}
</style>