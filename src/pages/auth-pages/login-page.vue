<template>
  <div class="login-page">
    <div class="login-page-inner">
      <v-card class="px-9 py-9 d-flex flex-column">
        <v-row class="flex-grow-0" no-gutters></v-row>
        <v-row class="flex-grow-1" no-gutters>
          <v-col>
            <h1 class="text-h4 font-weight-regular mb-3">Log In</h1>
            <div class="description text-text-secondary">
              Don't have an account? <span>Sign Up</span>.
            </div>
            <div class="login-form mt-4">
              <ui-text-input
                v-model="loginData.email"
                label="Email"
              ></ui-text-input>
              <ui-text-input
                v-model="loginData.password"
                label="Password"
                type="password"
                class="mt-4"
              ></ui-text-input>
              <div v-if="error" class="error text-error mt-2">
                {{ error }}
              </div>
              <div class="button-group mt-6">
                <button-blue
                  class="mr-3"
                  :is-loading="isLoading"
                  :disabled="!loginData.email || !loginData.password"
                  @click="login"
                  >LOG IN</button-blue
                >
                <!-- <button-white></button-white> -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UiTextInput from "@components/ui-text-input/ui-text-input.vue";
import ButtonBlue from "@components/buttons/button-blue.vue";
import ButtonWhite from "@components/buttons/button-white.vue";
import { useUserStore } from "@/store/UserStore";
import { toRefs, reactive, watch } from "vue";
import { LoginRequest } from "@/api/models/requests/LoginRequest";
import { useRouter } from "vue-router";

const loginData = reactive(new LoginRequest());
const router = useRouter();

const store = useUserStore();
const { isLoading, value, error } = toRefs(store.state);

watch(() => loginData, () => {
  error.value = null;
}, {deep: true})

const login = () => {
  store.login(loginData);
  store.$subscribe(
    () => {
      if (value) {
        router.push({ name: "app" });
      }
    },
    { deep: true }
  );
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  color: rgb(var(--v-theme-text-primary));
  align-items: center;
  justify-content: center;

  .login-page-inner {
    max-width: 610px;
    width: 100%;

    .description {
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .error {
      font-size: 14px;
    }
  }
}
</style>
