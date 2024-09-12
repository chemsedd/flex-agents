<template>
  <Draggable>
    <div class="card">
      <!-- Header -->
      <div class="w-full flex gap-2 items-start px-4 pb-4">
        <div :class="`mt-2 w-2 h-2 bg-${color}-500 ring-2 ring-${color}-300 rounded-full`"></div>
        <div class="flex-1">
          <span class="font-semibold">{{ label }}</span>
          <p>{{ description }}</p>
        </div>
        <button class="btn-square btn-transparent"><i data-feather="more-horizontal"></i></button>
      </div>
      <!-- Body -->
      <div class="space-y-2 max-w-md">
        <slot></slot>
      </div>
    </div>
  </Draggable>
</template>

<script>
import Draggable from '@marsio/vue-draggable'

export default {
  props: ['label', 'description', 'color'],
  components: {
    Draggable
  }
}
</script>

<style></style>
