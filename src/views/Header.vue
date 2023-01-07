<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
const menu = ref([
    {
        name: '主頁',
        routeName: 'home',
    },
    {
        name: '介紹',
        routeName: 'about',
    },
    {
        name: '登入',
        routeName: 'signIn',
    },
])
const routerClick = function (name) {
    this.$router.push({name})
}
</script>

<template>
    <nav class="navHeader">
        <ul class="routerGroup">
            <li><img src="../assets/logo.svg" alt="" srcset=""></li>
            <li v-for="item of menu" :key="item.routeName">
                <router-link :to="{ name: item.routeName }">{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.navHeader {
    width: 100%;
    border: 1px solid #123;
    .routerGroup {
        display: flex;
        li {
            list-style: none;
            padding: 5px;
            font-size: 18px;
        }
    }

}
</style>
