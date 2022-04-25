<template>
    <div class="overview">
        <div class="overview-main">
            <component v-for="[key, item] in OverviewData.overviewList" :key="key" :is="item.component" :item="item" />
        </div>

        <div class="filter">
            <img src="@assets/icons/filter.svg" alt="filter">
        </div>
    </div>
</template>

<script lang="ts" setup>
import OverviewData from './OverviewList'

</script>

<style lang="scss" scoped>
.overview {
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .overview-main {

        &:deep() .overview-item:not(:first-child) {
            margin-top: 20px;
        }
    }

    .filter {
        img {
            cursor: pointer;
        }
    }
}
</style>