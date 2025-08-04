import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            if (this.count === Number.MAX_SAFE_INTEGER) return
            this.count++
        },
        decrement() {
            if (this.count === Number.MIN_SAFE_INTEGER) return
            this.count--
        },
        reset() {
            this.count = 0
        }
    },
    persist: true
})
