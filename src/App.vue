<script>
import feather from 'feather-icons'
import Navbar from './components/Navbar.vue'
import Dashboard from './views/Dashboard.vue'

export default {
  components: {
    Navbar,
    Dashboard
  },
  mounted() {
    feather.replace()
  }
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Page main body -->
  <div id="content" class="flex-1 overflow-hidden">
    <Dashboard />
  </div>
</template>

<style>
#app {
  @apply h-dvh flex flex-col;
}

#content {
  @apply flex-1;
}
</style>
