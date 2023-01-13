<script setup>
import { ref, computed, watch } from 'vue'

const timeCount = ref(0)

const showTime = computed (() => {
    const minute = Math.floor(timeCount.value / 60)
    const second = timeCount.value % 60
    return `${minute}分${second}秒`
})

let countDown = null

watch (timeCount, () => {
    if (timeCount.value === 0) clearInterval(countDown)
})

function taskStart (second) {
    timeCount.value = second
    if (!countDown) {
        countDown = setInterval(() => {
            timeCount.value --
        }, 100)
    }
}
</script>

<template>
    <main>
        {{ timeCount ? '倒數中' : '時間到' }}
        {{ showTime }}
        <button @click="taskStart(100)">taskStart</button>
    </main>
</template>