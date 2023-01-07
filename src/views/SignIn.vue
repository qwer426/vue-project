<script setup>
import { userStore } from "../stores/signIn";
import { storeToRefs } from "pinia";

const store = userStore();
const { userInfo } = store
</script>

<template>
    <section id="signIn">
        <div>
            <span>帳號</span>
            <input type="text" v-model="userInfo.account">
        </div>
        <div>
            <span>密碼</span>
            <input type="text" v-model="userInfo.password">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #signIn {
        background: #000;
    }
</style>