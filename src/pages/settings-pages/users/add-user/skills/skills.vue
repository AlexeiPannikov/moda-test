<template>
  <user-page-template>
    <v-row no-gutters class="mt-9">
      <v-col cols="4">
        <input-with-label label="STYLING">
          <ui-checkbox
            v-model="styling.outfit"
            :id="1"
            label="Outfit Combination"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="EXTERNAL POST PRODUCTION">
          <ui-checkbox
            v-model="externalPostProduction.QC"
            :id="2"
            label="Quality Control"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4">
        <input-with-label label="PHOTOGRAPHY">
          <ui-checkbox
            v-model="photography.assistant"
            :id="3"
            label="Assistant"
          ></ui-checkbox>
          <ui-checkbox
            v-model="photography.photographer"
            :id="4"
            label="Photographer"
          ></ui-checkbox>
          <ui-checkbox
            v-model="photography.artDirector"
            :id="4"
            label="Art Director"
          ></ui-checkbox>
          <ui-checkbox
            v-model="photography.stylist"
            :id="5"
            label="Stylist"
          ></ui-checkbox>
          <ui-checkbox
            v-model="photography.hairAndMakeup"
            :id="6"
            label="Hair & Makeup"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="INTERNAL POST PRODUCTION">
          <ui-checkbox
            v-model="internalPostProduction.retouching"
            :id="7"
            label="Retouching"
          ></ui-checkbox>
          <ui-checkbox
            v-model="internalPostProduction.QC"
            :id="8"
            label="Quality Control"
          ></ui-checkbox>
        </input-with-label>
        <input-with-label label="COPYWRITING" class="mt-9">
          <ui-checkbox
            v-model="copywriting.writing"
            :id="9"
            label="Writing"
          ></ui-checkbox>
          <ui-checkbox
            v-model="copywriting.QC"
            :id="10"
            label="Quality Control"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-9">
      <v-col cols="4">
        <input-with-label label="TALENT">
          <ui-checkbox
            v-model="talent.model"
            :id="11"
            label="Model"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
      <v-col cols="4">
        <input-with-label label="STAKEHOLDER">
          <ui-checkbox
            v-model="stakeholder.photoReview"
            :id="12"
            label="Photo Review"
          ></ui-checkbox>
        </input-with-label>
      </v-col>
    </v-row>
  </user-page-template>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import UserPageTemplate from "../components/user-page-template.vue";
import InputWithLabel from "@/components/input-with-label/input-with-label.vue";
import UiCheckbox from "@/components/ui-checkbox/ui-checkbox.vue";
import { SkillsModel } from "./models/SkillsModel";

const isInviteUser = ref(false);
const skillsModel = reactive(new SkillsModel());
const {
  copywriting,
  externalPostProduction,
  internalPostProduction,
  photography,
  stakeholder,
  styling,
  talent,
} = toRefs(skillsModel);
</script>

<style lang="scss" scoped></style>
