<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from "@/stores/counter"
const store = useCounterStore()
const { count, doubleCount } = store
// console.log('count', store.count)
</script>
<template>
    <main>
        <input type="text" v-model="count">
        {{ doubleCount }}
    </main>
</template>