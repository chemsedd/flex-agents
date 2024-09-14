<script>
import feather from 'feather-icons'
import Sidebar from '@/components/Sidebar.vue'
import Board from '@/components/Board.vue'

export default {
  components: {
    Sidebar,
    Board
  },
  mounted() {
    feather.replace()
  }
}
</script>

<template>
  <!-- Dashboard content -->
  <div class="dashboard-container">
    <Sidebar />
    <!-- Board -->
    <main class="board">
      <div class="board-header">
        <div class="inline-flex">
          <!-- View controle -->
          <button class="btn-ghost"><i data-feather="corner-up-left"></i></button>
          <button class="btn-ghost"><i data-feather="corner-up-right"></i></button>
          <button class="btn-ghost">
            <span class="font-semibold">100%</span>
            <i data-feather="maximize-2"></i>
          </button>
        </div>
        <!-- Share options -->
        <div class="inline-flex items-center gap-6">
          <div class="inline-flex -space-x-2 text-purple-600">
            <button class="btn-circle">J</button>
            <button class="btn-circle">O</button>
          </div>
          <button class="btn-circle"><i data-feather="plus"></i></button>
          <i data-feather="check-circle" class="stroke-green-500 stroke-[3]"></i>
          <button class="btn shadow-sm">
            <i data-feather="share"></i> <span class="font-semibold">Publish</span>
          </button>
          <button class="btn-ghost bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white">
            <i data-feather="message-circle" class="stroke-white"></i>
            <span class="font-semibold">Chat with my bot</span>
          </button>
        </div>
      </div>
      <Board />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  @apply flex flex-1 h-full overflow-clip;
}

.inline-container {
  @apply inline-flex gap-2 items-center justify-between text-sm font-medium;
  @apply py-2 px-4 h-16;

  & svg {
    @apply h-4 w-4 text-gray-500;
  }
}

// Sidebar

.sidebar {
  @apply flex flex-col overflow-clip border-r text-gray-700;

  & svg {
    @apply text-gray-500 h-5 w-5;
  }
}

div.sidebar-header {
  @apply inline-container border-b;
}

ul.sidebar-menu {
  @apply flex flex-col gap-y-2 overflow-scroll;
  @apply px-2 py-2;

  & > li {
    @apply flex items-center justify-between gap-6 w-full;
    @apply btn-menu font-semibold whitespace-nowrap;
    @apply w-full;
  }
}

// Board

.board {
  @apply flex-1 flex flex-col;
}

.board-header {
  @apply inline-container px-6 border-b;
}
</style>
