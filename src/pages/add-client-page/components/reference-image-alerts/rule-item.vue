<template>
    <div class="rule-item d-flex mb-2">
        <v-icon class="handle grab" color="text-secondary">mdi-drag</v-icon>
        <div>
            <div class="text-text-primary sources">{{ props.item.sources.join(' / ') }}</div>
            <div class="text-primary prod-type">{{ props.item.productionType }} </div>
        </div>
        <v-spacer />
        <v-icon class="pointer" color="red" @click="remove(props.item.positionId)">
            mdi-trash-can-outline</v-icon>
    </div>
</template>

<script lang="ts" setup>
import { RuleModel } from './RuleModel';

interface IProps {
    item: RuleModel
}
const props = withDefaults(defineProps<IProps>(), {
    item: () => new RuleModel()
})

const emit = defineEmits<{
    (e: 'onRemove', id: number): void
}>()

const remove = (id: number) => {
    emit('onRemove', id)
}
</script>

<style lang="scss" scoped>
.rule-item {
    max-width: 400px;

    .grab {
        cursor: grab;
    }

    .pointer {
        cursor: pointer;
    }

    .sources {
        font-size: 16px;
    }

    .prod-type {
        font-size: 12px;
        text-transform: uppercase;
    }
}
</style>