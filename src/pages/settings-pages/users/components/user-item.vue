<template>
  <div class="users-item py-3 px-2 text-text-primary">
    <v-avatar :image="avatar" color="#bdbdbd" class="mr-2">
      <span class="text-white text-h6">{{ nameFirstLetters }}</span>
    </v-avatar>
    <div class="name text-h5">
      {{ name }}
    </div>
    <div class="role">
      <div class="label">ROLE</div>
      {{ role }}
    </div>
    <div class="type">
      <div class="label">TYPE</div>
      {{ type }}
    </div>
    <div class="last-login">
      <div class="label">LAST LOGIN</div>
      {{ lastLogin }}
    </div>
    <div class="actions">
      <v-icon
        @click="editUser"
        color="text-secondary"
        size="27"
        class="mr-2 action-icon"
        >mdi-square-edit-outline</v-icon
      >
      <v-icon color="text-secondary" size="27" class="mr-2 action-icon"
        >mdi-eye-off-outline</v-icon
      >
      <v-icon color="warning" size="27" class="mr-2 action-icon"
        >mdi-trash-can-outline</v-icon
      >
      <v-icon color="text-secondary" size="27" class="mr-2 action-icon"
        >mdi-email-outline</v-icon
      >
      <v-icon color="text-secondary" size="27" class="action-icon"
        >mdi-content-copy</v-icon
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { toRefs } from "vue";
import { useRouter } from "vue-router";
import { UserModel } from "./models/UserModel";

interface IProps {
  user: UserModel;
}

const props = withDefaults(defineProps<IProps>(), {
  user: () => new UserModel(),
});

const { id, avatar, name, role, type, lastLogin } = toRefs(props.user);

const router = useRouter();

const nameFirstLetters = computed(() => {
  return name.value
    .split(" ")
    .map((item) => item[0])
    .join("");
});

const editUser = () => {
  router.push({ name: "edit-user", params: { id: id.value } });
};
</script>

<style lang="scss" scoped>
.users-item {
  display: grid;
  grid-template-columns: auto 4fr 3fr 3fr 3fr 1fr;
  border-bottom: 1px solid #ccc;
  width: 100%;

  .name,
  .role,
  .type,
  .last-login,
  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .actions {
    flex-direction: row;
    align-items: center;
    overflow: visible;
  }

  .label {
    font-size: 11px;
    color: rgb(var(--v-theme-text-secondary));
  }

  .action-icon {
    cursor: pointer;
  }
}
</style>
