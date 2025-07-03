<template>
    <div>
        <div>
            <div class="flex justify-center">{{ counterStore.count }}</div>
            <div class="flex justify-center gap-2">
                <button @click="increment">Increment</button>
                <button @click="decrement">Decrement</button>
                <button @click="reset">Reset</button>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <span class="el-test">block</span>
            <span class="el-test__title">element</span>
            <span class="el-test--description">modifier</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/store/counter"

const counterStore = useCounterStore()

const increment = () => {
    counterStore.increment()
}

const decrement = () => {
    counterStore.decrement()
}

const reset = () => {
    counterStore.reset()
}
</script>

<style scoped lang="scss">
@include b('test') {
    background-color: red; // Block的样式

    @include e('title') {
        color: blue; // Element的样式
    }

    @include m('description') {
        color: green; // Modifier的样式
    }
}
</style>
