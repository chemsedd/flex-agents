<template>
  <header class="navbar">
    <!--  -->
    <div class="sm:hidden flex justify-end p-2">
      <button class="btn-square" @click="toggleNavbar = !toggleNavbar">
        <i data-feather="menu"></i>
      </button>
    </div>
    <div :class="`navbar-container ${toggleNavbar ? 'flex' : 'hidden sm:flex'}`">
      <!-- Logo section -->
      <div class="inline-flex gap-6 items-center">
        <button class="btn-square">
          <i data-feather="chevron-left"></i>
        </button>
        <h2 class="font-bold">FLEX<span class="text-indigo-500">A</span>.</h2>
      </div>
      <!-- Change project -->
      <div class="font-semibold inline-flex gap-2 items-center">
        <span>Untitled project</span>
        <i data-feather="chevron-down"></i>
      </div>
      <!-- Buttons section -->
      <div class="inline-flex gap-2 items-center text-gray-900">
        <button class="btn-ghost"><i data-feather="box"></i></button>
        <button class="btn-ghost"><i data-feather="help-circle"></i></button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggleNavbar: false
    }
  }
}
</script>

<style scoped lang="scss">
header.navbar {
  @apply border-b;

  & > .navbar-container {
    @apply flex-col justify-between items-center gap-4 px-10 py-4;
    @apply sm:flex-row;
  }
}
</style>
