<template>
  <v-app-bar class="header pl-9 pr-3 w-100" flat absolute>
    <div class="logo">Logo</div>
    <nav
      class="d-flex nav-list w-100 ml-7"
      color="text-primary"
      slider-color="primary"
      alignWithTitle
      show-arrows
      :optional="true"
    >
      <nav-item :to="{ name: 'production', params: { type: 'in-progress' } }">
        PRODUCTION
      </nav-item>
      <nav-item :to="{ name: 'jobs' }"> JOBS </nav-item>
      <nav-item :to="{ name: 'products' }"> PRODUCTS </nav-item>
      <nav-item
        @click="isOpenTask = true"
        v-click-outside="
          () => {
            isOpenTask = false;
          }
        "
      >
        TASK <v-icon class="ml-3">mdi-chevron-down</v-icon>
        <dropdown-box v-if="isOpenTask">
          <nav-sub-item>PHOTOGRAPHY</nav-sub-item>
          <nav-sub-item>FINAL SECTION</nav-sub-item>
        </dropdown-box>
      </nav-item>
      <nav-item :to="{ name: 'samples' }"> SAMPLES </nav-item>
      <nav-item :to="{ name: 'assets' }"> ASSETS </nav-item>
      <nav-item :to="{ name: 'wardrobe' }"> WARDROBE </nav-item>
      <nav-item :to="{ name: 'insights' }"> INSIGHTS </nav-item>
      <nav-item :to="{ name: 'labs' }"> LABS </nav-item>
    </nav>

    <div class="icon-group mr-4">
      <v-btn
        icon="mdi-keyboard-outline"
        class="mr-2 text-text-secondary"
        width="24"
        height="24"
      />
      <v-tooltip anchor="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-clock-time-two-outline"
            class="text-text-secondary"
            v-bind="props"
            width="24"
            height="24"
          />
        </template>
        <span>Tooltip</span>
      </v-tooltip>
    </div>

    <nav-item
      class="pixelmoda-menu"
      @click="isOpenMenu = true"
      v-click-outside="
        () => {
          isOpenMenu = false;
        }
      "
    >
      <v-tooltip anchor="bottom">
        <template v-slot:activator="{ props }">
          <v-avatar :image="getAvatar" class="mr-3" v-bind="props"></v-avatar>
        </template>
        <span>{{value?.name}}</span>
      </v-tooltip>
      PIXELMODA <v-icon class="ml-3">mdi-chevron-down</v-icon>
      <dropdown-box v-if="isOpenMenu">
        <nav-sub-item>MY SETTINGS</nav-sub-item>
        <nav-sub-item :to="{ name: 'studio', params: { item: 'general' } }"
          >STUDIO SETTINGS</nav-sub-item
        >
        <nav-sub-item>WORKFLOWS</nav-sub-item>
        <nav-sub-item>STYLE GUIDES</nav-sub-item>
        <nav-sub-item>COMPUTER LOCATION</nav-sub-item>
        <nav-sub-item>DEBUG INFO</nav-sub-item>
        <nav-sub-item @click="logout">LOGOUT</nav-sub-item>
      </dropdown-box>
    </nav-item>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import DefaultAvatar from "@assets/images/default-avatar.png";
import NavItem from "./components/nav-item.vue";
import NavSubItem from "./components/nav-sub-item.vue";
import DropdownBox from "@/components/dropdown-box/dropdown-box.vue";
import { useUserStore } from "@/store/UserStore";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

const store = useUserStore();
const { value } = toRefs(store.state);
const router = useRouter();

const isOpenTask = ref(false);
const isOpenMenu = ref(false);

store.getCurrentUser();

const getAvatar = computed(() => {
  return DefaultAvatar;
});

const tasks = reactive([
  { name: "PHOTOGRAPHY", pathName: "production" },
  { name: "FINAL SELECTION", pathName: "production" },
]);

const logout = async () => {
  const res = await store.logout();
  if (res) {
    router.push({ name: "login" });
  }
};
</script>

<style lang="scss">
.header {
  .logo {
    background-color: #c4c4c4;
    border-radius: 50%;
    flex: 0 0 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  .icon-group {
    display: flex;
  }

  .border-left {
    border-left: 1px solid #e9e9e9;
  }
}

.v-btn__overlay {
  opacity: 0 !important;
}

.button {
  position: relative !important;
  border-radius: 0 !important;

  &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: transparent;
    height: 4px;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: all 0.15s linear;
  }

  &:hover::before {
    content: "";
    background-color: #f2f2f2;
  }
}

.nav-list,
.pixelmoda-menu {
  height: calc(100% + 32px) !important;
}

// .list-item {
//     border-left: 4px solid transparent !important;

//     &:hover {
//         background-color: #f8f8f8;
//         border-color: rgb(var(--v-theme-primary)) !important;
//     }
// }

// .list-item.v-list-item--active {
// border-left: 4px solid rgb(var(--v-theme-primary));
// background-color: white;
// }

.list-item.list-item.v-list-item--active .v-list-item__overlay {
  opacity: 0 !important;
}

.list-item.v-list-item {
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: transparent;
    transition: all 0.15s linear;
  }

  &:hover::before {
    background-color: rgb(var(--v-theme-primary));
  }

  &.v-list-item--active {
    &::before {
      background-color: rgb(var(--v-theme-primary));
    }
  }
}

.v-toolbar {
  overflow: visible !important;
}
</style>
