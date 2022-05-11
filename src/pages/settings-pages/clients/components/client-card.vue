<template>
  <div class="client-card-wrap">
    <v-card
      class="client-card h-100 px-5 py-5 d-flex flex-column align-center"
      flat
    >
      <div class="d-flex align-center justify-center flex-grow-1 w-100">
        <div class="client-image-wrap">
          <v-img :src="props.img"></v-img>
        </div>
      </div>
      <div class="client-name text-text-primary font-weight-bold mt-5">
        <slot></slot>
      </div>
    </v-card>

    <div class="card-tools mt-2">
      <v-icon color="text-secondary" size="27">mdi-square-edit-outline</v-icon>
      <v-icon color="text-secondary" size="27">mdi-eye-off-outline</v-icon>
      <v-icon color="red" size="27">mdi-trash-can-outline</v-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  img: string;
}

const props = withDefaults(defineProps<IProps>(), {
  img: "",
});
</script>

<style lang="scss" scoped>
.client-card-wrap {
  position: relative;
  width: 233px;

  .client-card {
    box-shadow: none !important;
    background: rgb(var(--v-theme-client-card-back));
    width: 100%;
    transition: all 0.2s linear;
    z-index: 10;

    &:not(:last-child) {
      margin-right: 16px;
    }

    .client-image-wrap {
      background-color: white;
      border-radius: 50%;
      height: 193px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  }

  .card-tools {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    z-index: 1;
    transition: all 0.2s linear;
  }

  &:hover .client-card {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25) !important;
  }

  &:hover .card-tools {
    right: -35px;
  }
}
</style>
