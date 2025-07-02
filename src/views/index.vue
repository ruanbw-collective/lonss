<template>
    <div>
        <p align="center">{{ counterStore.count }}</p>
        <p align="center">
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
            <button @click="reset">Reset</button>
        </p>
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

<style scoped></style>
