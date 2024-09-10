<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
