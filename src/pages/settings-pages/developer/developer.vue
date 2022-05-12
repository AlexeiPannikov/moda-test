<template>
  <scroll-box-2>
    <v-row no-gutters justify="center" align="center" class="flex-grow-0">
      <v-col class="d-flex flex-grow-0">
        <button-blue v-if="isRegisterApps" @click="isRegisterApps = true" class="mr-3">REGISTER APPS</button-blue>
        <button-white v-else @click="isRegisterApps = true" class="mr-3">REGISTER APPS</button-white>
        <button-white v-if="isRegisterApps" @click="isRegisterApps = false">WEBHOOKS</button-white>
        <button-blue v-else @click="isRegisterApps = false">WEBHOOKS</button-blue>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center" class="h-100 mt-3">
      <v-col class="d-flex flex-column align-center">
        <img class="no-data-image" :src="noDataImage" />
        <button-blue class="mr-3">{{isRegisterApps ? 'REGISTER APP' : 'ADD WEBHOOK'}}</button-blue>
      </v-col>
    </v-row>
  </scroll-box-2>
</template>

<script lang="ts" setup>
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import ButtonWhite from "@/components/buttons/button-white.vue";
import ButtonBlue from "@/components/buttons/button-blue.vue";
import NoApplicationImg from "@assets/images/no-application.png";
import NoWebhooksImg from "@assets/images/no-webhooks.png";
import { computed, ref } from "@vue/reactivity";

const isRegisterApps = ref(false)

const noDataImage = computed(() => {
  return isRegisterApps.value ? NoApplicationImg : NoWebhooksImg
})

</script>

<style lang="scss" scoped>
.no-data-image {
  max-width: 428px;
}
</style>
