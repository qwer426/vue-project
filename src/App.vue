<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './views/Header.vue';
</script>
<template>
    <article>
        <section class="common-layout">
            <el-container>
                 <el-header>
                    <HeaderVue />
                </el-header>
                 <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </section>
    </article>
</template>
<style>
html,
body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;
}
</style>