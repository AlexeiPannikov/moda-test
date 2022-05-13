<template>
  <div class="users-page h-100 d-flex flex-column">
    <v-row no-gutters class="flex-grow-0">
      <v-col class="d-flex ml-2">
        <ui-small-search class="mr-5"></ui-small-search>
        <button-blue @click="goToAddUserPage">ADD</button-blue>
      </v-col>
    </v-row>
    <v-row no-gutters class="flex-grow-1">
      <v-col>
        <scroll-box-2>
            <div class="user-list mt-3">
                <user-item v-for="user in users" :key="user.id" :user="user"></user-item>
            </div>
        </scroll-box-2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import UiSmallSearch from "@/components/ui-search/ui-small-search.vue";
import ButtonBlue from "@/components/buttons/button-blue.vue";
import UserItem from "./components/user-item.vue";
import { UserModel } from "./components/models/UserModel";
import { reactive } from "vue";
import DefaultAvatar from "@assets/images/default-avatar.png"
import { useRouter } from "vue-router";

const router = useRouter()

const users = reactive([
    new UserModel({id: 1, name: "Test Test", role: 'PHOTOGRAPHER', type: "Full-time user", lastLogin: "8 days ago"}),
    new UserModel({id: 2, avatar: DefaultAvatar, name: "Test Test", role: 'PHOTOGRAPHER', type: "Full-time user", lastLogin: "8 days ago"}),
    new UserModel({id: 3, avatar: DefaultAvatar, name: "Test Test", role: 'PHOTOGRAPHER', type: "Full-time user", lastLogin: "8 days ago"}),
])

const goToAddUserPage = () => {
  router.push({ name: "add-user" })
};
</script>

<style lang="scss" scoped></style>
