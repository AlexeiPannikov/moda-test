<template>
  <v-row class="border-bottom h-50 pb-9" no-gutters>
    <v-col>
      <v-card
        class="add-client h-100 px-5 py-5 d-flex flex-column"
        max-width="233"
        flat
        @click="addClient"
      >
        <div class="d-flex align-center justify-center flex-grow-1">
          <v-icon
            size="50"
            color="text-secondary"
            class="icon-border align-self-center"
          >
            mdi-plus
          </v-icon>
        </div>
        <button-white>ADD A CLIENT</button-white>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="h-50 pt-9" no-gutters>
    <scroll-box-2>
      <div class="w-100 card-list px-2 py-2">
        <client-card :img="AmazonPicture"> AMAZON FASHION UK </client-card>
        <client-card :img="MastercardPicture"> Client 2 </client-card>
        <client-card :img="NikePicture"> Client 3 </client-card>
        <client-card :img="Client4"> Client 4 </client-card>
      </div>
    </scroll-box-2>
  </v-row>
</template>

<script lang="ts" setup>
import scrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import ButtonWhite from "@/components/buttons/button-white.vue";
import AmazonPicture from "@assets/images/amazon.png";
import MastercardPicture from "@assets/images/mastercard.png";
import NikePicture from "@assets/images/nike.png";
import Client4 from "@assets/images/image-4.png";
import { useRouter } from "vue-router";
import ScrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import ClientCard from "./components/client-card.vue";

const router = useRouter();

const addClient = () => {
  router.push({ name: "add-client", params: { item: "settings" } });
};
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}

.add-client {
  box-shadow: none !important;
  cursor: pointer;
  border: 2px solid transparent;
  background: rgb(var(--v-theme-client-card-back));
  width: 233px;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    border-color: rgb(var(--v-theme-primary));
  }
}

.icon-border {
  border-radius: 50%;
  border: 2px solid rgb(var(--v-theme-text-secondary));
}

.border-bottom {
  border-bottom: 1px solid #dedede;
}
</style>
