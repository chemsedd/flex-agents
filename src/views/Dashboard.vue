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
  <div class="flex flex-1 overflow-clip">
    <div class="p-2 overflow-clip">
      <ul class="sidebar-menu overflow-y-scroll">
        <li v-for="item in sidebarItems" :key="item.label">
          <div class="inline-flex items-center gap-3">
            <i :data-feather="item.icon"></i>
            <span> {{ item.label }}</span>
          </div>

          <div v-if="item.subitems">
            <i data-feather="chevron-down"></i>
          </div>
        </li>
      </ul>
    </div>
    <main class="flex-1 flex items-center justify-center">BOARD HERE</main>
  </div>
</template>
