<template>
  <div class="sidebar">
    <!-- Library search -->
    <div class="sidebar-header">
      <button class="btn-ghost">
        <i data-feather="search"></i>
        <span class="hidden sm:block">Library</span>
      </button>
      <div class="hidden sm:inline-flex">
        <button class="btn-ghost"><i data-feather="chevron-down"></i></button>
        <button class="btn-ghost"><i data-feather="minimize"></i></button>
      </div>
    </div>
    <!-- Library items -->
    <ul class="sidebar-menu">
      <li v-for="item in sidebarItems" :key="item.label">
        <div class="inline-flex items-center gap-3">
          <i :data-feather="item.icon"></i>
          <span class="hidden sm:block"> {{ item.label }}</span>
        </div>

        <i v-if="item.subitems" data-feather="chevron-down"></i>
      </li>
    </ul>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  @apply flex flex-col overflow-clip border-r text-gray-700;

  & svg {
    @apply text-gray-500 h-5 w-5;
  }
}

div.sidebar-header {
  @apply inline-flex gap-2 items-center justify-between text-sm font-medium;
  @apply py-2 px-4 h-16 border-b;

  & svg {
    @apply h-4 w-4 text-gray-500;
  }
}

ul.sidebar-menu {
  @apply flex flex-col gap-y-2 overflow-scroll;
  @apply px-2 py-2;

  & > li {
    @apply flex items-center justify-between gap-6 w-full;
    @apply btn-menu font-semibold whitespace-nowrap;
  }
}
</style>
