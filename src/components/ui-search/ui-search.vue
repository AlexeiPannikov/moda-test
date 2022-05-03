<template>
    <div class="ui-search-wrap">
        <input class="ui-search" :placeholder="placeholder" />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.ui-search-wrap {
    position: relative;
    width: 100%;

    .ui-search {
        height: 46px;
        border-radius: 47px;
        background-color: #F5F5F5;
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px 0 50px;

        &:focus {
            outline: none;
            border: 1px solid rgb(var(--v-theme-primary));
        }
    }

    &:before {
        content: url('@assets/icons/search.svg');
        display: block;
        position: absolute;
        left: 20px;
        top: calc(50% - 8px);
        width: 24px;
        height: 24px;
    }
}

// &:deep().v-field__input {
//     align-self: auto;
// }

// &:deep().v-field__outline {
//     display: none;
// }

// &:deep().v-field__field {
//     border: 1px solid #C4C4C4;
//     border-radius: 4px;
//     padding-top: 7px;
//     max-height: 46px;
//     align-items: center;

//     &:hover {
//         border-color: #7B7B7B;
//     }

//     &:focus-within {
//         box-shadow: 0px 0px 10px rgba(73, 159, 255, 0.25);
//         border: 1px solid rgb(var(--v-theme-primary));
//     }
// }
</style>