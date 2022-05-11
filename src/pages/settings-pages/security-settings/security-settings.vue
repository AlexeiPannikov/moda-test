<template>
  <scroll-box-2>
    <v-row no-gutters align="center">
      <v-col>
        <h2 class="font-weight-light text-h4 text-text-primary">
          Security Settings
        </h2>
      </v-col>
    </v-row>

    <template v-if="!isShowSettings">
      <v-row class="mt-5" no-gutters>
        <v-col cols="4">
          <input-with-label label="STUDIO NAME">
            <ui-text-input v-model="password"></ui-text-input>
          </input-with-label>

          <button-blue @click="sendPassword" :disabled="!password" class="mt-5"
            >Continue</button-blue
          >
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <v-row class="mt-5" no-gutters>
        <v-col>
          <h3 class="font-weight-regular text-h6 text-text-primary">
            Two Factor Authentication (2FA)
          </h3>
          <div class="description font-weight-regular text-text-secondary mt-3">
            When 2FA is enabled, users will be able to manually enroll via their
            account settings. <br />
            When 2FA is enforced, new users and users that have not enrolled,
            will be forced to enroll.
          </div>
          <div class="d-flex mt-5">
            <input-with-label label="ENABLED" class="mr-9 switcher-width">
              <ui-switch
                v-model="twoFactorAuth.enabled"
                :label="twoFactorAuth.enabled ? 'Yes' : 'No'"
                class="ml-2"
              ></ui-switch>
            </input-with-label>
            <input-with-label label="ENFORCED" class="switcher-width">
              <ui-switch
              :disabled="!twoFactorAuth.enabled"
                v-model="twoFactorAuth.enforced"
                :label="twoFactorAuth.enforced ? 'Yes' : 'No'"
              ></ui-switch>
            </input-with-label>
          </div>
          
        </v-col>
      </v-row>

      <v-row class="mt-9" no-gutters>
        <v-col>
          <h3 class="font-weight-regular text-h6 text-text-primary">
            User Password Rules
          </h3>
          <div class="slider-group mt-3">
            <div class="slider-wrap d-flex align-center">
              <div class="label mr-7">Length</div>
              <v-slider
                v-model="passwordRules.length.value"
                class="align-center"
                thumb-color="primary"
                track-color="text-secondary"
                color="primary"
                :max="passwordRules.length.max"
                :min="passwordRules.length.min"
                step="1"
                hide-details
              ></v-slider>
              <div class="selected-slider-data ml-5">
                {{ passwordRules.length.value }}
              </div>
            </div>
            <div class="slider-wrap d-flex align-center mt-3">
              <div class="label mr-7">Digits</div>
              <v-slider
                v-model="passwordRules.digits.value"
                class="align-center"
                thumb-color="primary"
                track-color="text-secondary"
                color="primary"
                :max="passwordRules.digits.max"
                :min="passwordRules.digits.min"
                step="1"
                hide-details
              ></v-slider>
              <div class="selected-slider-data ml-5">
                {{ passwordRules.digits.value }}
              </div>
            </div>
            <div class="slider-wrap d-flex align-center mt-3">
              <div class="label mr-7">Symbols</div>
              <v-slider
                v-model="passwordRules.symbols.value"
                class="align-center"
                thumb-color="primary"
                track-color="text-secondary"
                color="primary"
                :max="passwordRules.symbols.max"
                :min="passwordRules.symbols.min"
                step="1"
                hide-details
              ></v-slider>
              <div class="selected-slider-data ml-5">
                {{ passwordRules.symbols.value }}
              </div>
            </div>
          </div>
          <ui-checkbox
            v-model="passwordRules.uppercaseAndLowercase"
            :id="1"
            class="mt-5"
            label="Enforce a mix of uppercase and lowercase letters."
          ></ui-checkbox>
          <ui-checkbox
            v-model="passwordRules.restrictRepetition"
            :id="2"
            class="mt-2"
            label="Restrict character repetition, keyboard patterns, letter or number sequences."
          ></ui-checkbox>
        </v-col>
      </v-row>

      <v-row class="mt-5" no-gutters>
        <v-col>
          <h3 class="font-weight-regular text-h6 text-text-primary">
            IP Whitelist
          </h3>
          <div class="d-flex mt-5">
            <input-with-label label="ENABLED" class="mr-9 switcher-width">
              <ui-switch
                v-model="IPWhitelist.enabled"
                :label="IPWhitelist.enabled ? 'Yes' : 'No'"
                class="ml-2"
              ></ui-switch>
            </input-with-label>
            <div class="align-self-end text-warning warning">
              <v-icon color="warning">mdi-alert</v-icon> Your IP is not in the
              whitelist. <span>Add in now</span>
            </div>
          </div>
          <button-white class="mt-4">ADD IPS</button-white>

          <div class="description text-text-secondary mt-3">
            Add IPs before enabling IP Whitelist.
          </div>
          <div class="access-log mt-2">IP Access log</div>
        </v-col>
      </v-row>
    </template>
  </scroll-box-2>
</template>

<script lang="ts" setup>
import ButtonBlue from "@/components/buttons/button-blue.vue";
import ScrollBox2 from "@/components/scroll-box/scroll-box-2.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiTextInput from "@/components/ui-text-input/ui-text-input.vue";
import { reactive, ref, toRefs } from "@vue/reactivity";
import UiSwitch from "@/components/ui-switch/ui-switch.vue";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import ButtonWhite from "@/components/buttons/button-white.vue";
import { SecuritySettingsModel } from "./models/SecuritySettingsModel";
import { onMounted, watch } from "vue";
import { objectEquals } from "@/functions/objectEquals";

const password = ref("");
const isShowSettings = ref(false);

const settingsModel = reactive(new SecuritySettingsModel());

let settingsModelCopy = reactive(new SecuritySettingsModel());

const isAuthEqual = ref(true)
const isPassRulesEqual = ref(true)
// const isIPWhitelistEqual = ref(true)

const { IPWhitelist, passwordRules, twoFactorAuth } = toRefs(settingsModel);

onMounted(() => {
  settingsModelCopy = JSON.parse(JSON.stringify(settingsModel));
});

watch(
  () => settingsModel,
  () => {
        
  },
  { deep: true }
);


const sendPassword = () => {
  isShowSettings.value = true;
};
</script>

<style lang="scss" scoped>
.description {
  font-size: 13px;
}

.switcher-width {
  max-width: 150px;
  width: 100%;
}

.slider-group {
  max-width: 300px;

  .label {
    flex: 0 0 20%;
  }

  .selected-slider-data {
    width: 45px;
    height: 35px;
    border: 1px solid #7b7b7b7b;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.warning {
  font-size: 13px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
}

.access-log {
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
