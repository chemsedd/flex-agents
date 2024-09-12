<script>
import feather from 'feather-icons'

export default {
  mounted() {
    feather.replace()
  }
}
</script>

<template>
  <!-- Header bar -->
  <header class="px-10 py-4 border-b flex justify-between items-center">
    <div class="inline-flex gap-6 items-center">
      <button class="btn-square">
        <i data-feather="chevron-left"></i>
      </button>
      <h2 class="font-bold">FLEX<span class="text-indigo-500">A</span>.</h2>
    </div>

    <div class="font-semibold inline-flex gap-2 items-center">
      <span>Untitled project</span>
      <i data-feather="chevron-down"></i>
    </div>

    <div class="inline-flex gap-2 items-center text-gray-900">
      <button class="btn-ghost">
        <i data-feather="box"></i>
      </button>

      <button class="btn-ghost">
        <i data-feather="help-circle"></i>
      </button>
    </div>
  </header>

  <!-- Page main body -->
  <div id="content" class="flex-1 overflow-auto highlight">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  /* Set the height to 100% of the viewport height */
  height: 100dvh;
  /* Use flexbox to create a column layout */
  display: flex;
  flex-direction: column;
}

#content {
  /* Make the content stretch and take all available space */
  flex: 1;
  /* Allow scrolling within the content if necessary */
  overflow: auto;
}
</style>
