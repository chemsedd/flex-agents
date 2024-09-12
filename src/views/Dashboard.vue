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
        <div class="inline-flex gap-2">
          <i data-feather="chevron-down"></i>
          <i data-feather="minimize"></i>
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
    <main class="board">BOARD HERE</main>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  @apply flex flex-1 overflow-clip;
}

.sidebar {
  @apply p-2 flex flex-col overflow-clip border-r;

  & svg {
    @apply text-gray-500 h-5 w-5;
  }
}

div.sidebar-header {
  @apply py-2 inline-flex gap-2 items-center justify-between text-sm;
}

ul.sidebar-menu {
  @apply flex flex-col gap-y-2 overflow-scroll;

  & > li {
    @apply flex items-center justify-between gap-6 w-full;
    @apply btn-menu font-semibold whitespace-nowrap;
    @apply w-full;
  }
}

.board {
  @apply flex-1 flex items-center justify-center;
}
</style>
