<script>
import feather from 'feather-icons'

export default {
  data() {
    return {
      sidebarItems: [
        {
          icon: 'corner-down-right',
          label: 'Start node'
        },
        {
          icon: 'corner-down-right',
          label: 'Agents',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'link',
          label: 'Chains',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'loader',
          label: 'Loaders',

          subitems: [
            {
              label: 'CSV Loader'
            },
            {
              label: 'File loader'
            }
          ]
        },
        {
          icon: 'database',
          label: 'Embeddings',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: "LLM's",
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: 'Memories',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: 'Output Parsers',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'message-circle',
          label: 'Prompts',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: 'Toolkits',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'tool',
          label: 'Tools',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'activity',
          label: 'Utilities',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'layers',
          label: 'Vector stores',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: 'Wrappers',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'code',
          label: 'Custom',
          subitems: [{ label: 'Item 1' }]
        },
        {
          icon: 'terminal',
          label: 'End node'
        }
      ]
    }
  },
  mounted() {
    feather.replace()
  }
}
</script>

<template>
  <!-- Dashboard content -->
  <div class="dashboard-container">
    <div class="sidebar">
      <!-- Library search -->
      <div class="sidebar-header">
        <button class="btn-ghost">
          <i data-feather="search"></i>
          <span>Library</span>
        </button>
        <div class="inline-flex">
          <button class="btn-ghost"><i data-feather="chevron-down"></i></button>
          <button class="btn-ghost"><i data-feather="minimize"></i></button>
        </div>
      </div>
      <!-- Library items -->
      <ul class="sidebar-menu">
        <li v-for="item in sidebarItems" :key="item.label">
          <div class="inline-flex items-center gap-3">
            <i :data-feather="item.icon"></i>
            <span> {{ item.label }}</span>
          </div>

          <i v-if="item.subitems" data-feather="chevron-down"></i>
        </li>
      </ul>
    </div>
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
    </main>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  @apply flex flex-1 overflow-clip;
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
  @apply flex flex-col overflow-clip border-r;

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
