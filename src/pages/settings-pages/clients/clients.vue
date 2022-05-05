<template>
    <v-row class="border-bottom h-50 pb-9" no-gutters>
        <v-col>
            <v-card class="client-card h-100 px-5 py-5 d-flex flex-column" max-width="233" flat>
                <div class="d-flex align-center justify-center flex-grow-1">
                    <v-icon size="50" color="text-secondary" class="icon-border align-self-center">
                        mdi-plus
                    </v-icon>
                </div>
                <button-white @click="addClient">ADD A CLIENT</button-white>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="h-50 pt-9" no-gutters>
        <scroll-box-2>
            <div class="w-100 card-list">
                <v-card class="client-card h-100 px-5 py-5 d-flex flex-column align-center" flat>
                    <div class="d-flex align-center justify-center flex-grow-1 w-100">
                        <div class="client-image-wrap">
                            <v-img :src="AmazonPicture"></v-img>
                        </div>
                    </div>
                    <div class="client-name text-text-primary font-weight-bold mt-5">AMAZON FASHION
                        UK
                    </div>
                </v-card>
                <v-card class="client-card h-100 px-5 py-5 d-flex flex-column align-center" flat>
                    <div class="d-flex align-center justify-center flex-grow-1 w-100">
                        <div class="client-image-wrap">
                            <v-img :src="MastercardPicture"></v-img>
                        </div>
                    </div>
                    <div class="client-name text-text-primary font-weight-bold mt-5">Client 2</div>
                </v-card>
                <v-card class="client-card h-100 px-5 py-5 d-flex flex-column align-center" flat>
                    <div class="d-flex align-center justify-center flex-grow-1 w-100">
                        <div class="client-image-wrap">
                            <v-img :src="NikePicture"></v-img>
                        </div>
                    </div>
                    <div class="client-name text-text-primary font-weight-bold mt-5">Client 3</div>
                </v-card>
                <v-card class="client-card h-100 px-5 py-5 d-flex flex-column align-center" flat>
                    <div class="d-flex align-center justify-center flex-grow-1 w-100">
                        <div class="client-image-wrap">
                            <v-img :src="Client4"></v-img>
                        </div>
                    </div>
                    <div class="client-name text-text-primary font-weight-bold mt-5">Client 4</div>
                </v-card>
            </div>
        </scroll-box-2>
    </v-row>
</template>

<script lang="ts" setup>
import scrollBox2 from "@components/scroll-box/scroll-box-2.vue";
import ButtonWhite from '@/components/buttons/button-white.vue';
import AmazonPicture from "@assets/images/amazon.png";
import MastercardPicture from "@assets/images/mastercard.png";
import NikePicture from "@assets/images/nike.png";
import Client4 from "@assets/images/image-4.png";
import { useRouter } from 'vue-router';
import ScrollBox2 from '@components/scroll-box/scroll-box-2.vue';

const router = useRouter()

const addClient = () => {
    router.push({name: 'add-client', params: {item: 'settings'}})
}
</script>

<style lang="scss" scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
}

.client-card {
    box-shadow: none !important;
    background: rgb(var(--v-theme-client-card-back));
    width: 233px;

    &:not(:last-child) {
        margin-right: 16px;
    }
}

.icon-border {
    border-radius: 50%;
    border: 2px solid rgb(var(--v-theme-text-secondary))
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

.border-bottom {
    border-bottom: 1px solid #DEDEDE;
}
</style>