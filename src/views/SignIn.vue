<script setup>
import { userStore } from "../stores/signIn";
import { storeToRefs } from "pinia";

const store = userStore();
const { userInfo } = store
</script>

<template>
    <section id="signIn">
        <div class="signInItem">
            <span>帳號</span>
            <el-input v-model="userInfo.account" placeholder="Please input" />
        </div>
        <div class="signInItem">
            <span>密碼</span>
            <el-input v-model="userInfo.password" placeholder="Please input" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #signIn {
        .signInItem{
            display: flex;
            > span {
                width: 10%;
                max-width: 60px;
                padding: 10px;
                box-sizing: border-box;
            }
        }
        .signInItem + .signInItem {
            margin-top: 1rem;
        }
    }
</style>