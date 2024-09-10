<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="px-10 py-4 border-b flex justify-between items-center">
    <div class="inline-flex gap-6 items-center">
      <button class="btn">+</button>
      <h2>LOGO</h2>
    </div>

    <div class="font-semibold">
      <router-link :to="{ name: 'dashboard' }">Untitled project</router-link>
    </div>

    <div class="inline-flex gap-2 items-center">
      <button class="btn-ghost">+</button>
      <button class="btn-ghost">+</button>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
