<template>
  <div class="add-client-component-template d-flex flex-column">
    <scroll-box-2>
      <div class="content flex-grow-1">
        <slot></slot>
      </div>
    </scroll-box-2>
    <div class="buttons d-flex align-center align-self-end flex-grow-0 mt-4">
      <ui-switch
        v-model="store.addUserModel.isInviteUser"
        class="mr-5"
        label="Invite User"
      ></ui-switch>
      <button-blue class="mr-2">Save</button-blue>
      <button-white>Cancel</button-white>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ButtonBlue from "@components/buttons/button-blue.vue";
import ButtonWhite from "@components/buttons/button-white.vue";
import UiSwitch from "@/components/ui-switch/ui-switch.vue";
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import { useAddUserStore } from "@/store/AddUserStore";

const store = useAddUserStore()

</script>

<style lang="scss" scoped>
.add-client-component-template {
  width: 100%;
  height: 100%;
}
</style>
