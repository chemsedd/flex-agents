<template>
  <div class="board-canva text-sm">
    <div class="board-canva-content">
      <!--  Prompt card -->
      <Card label="Prompt" description="Prompt template for a language model" color="green">
        <div class="space-y-2 px-4 py-2">
          <label for="template">Template <span class="required">*</span></label>
          <div class="inline-flex gap-2 w-full">
            <input
              type="text"
              placeholder="You are a helpful car associate in a"
              class="input w-full"
            />
            <button class="btn-square"><i data-feather="arrow-up-right"></i></button>
          </div>
        </div>

        <!-- Query Field -->
        <div class="space-y-2 px-4 py-2 bg-white">
          <label for="query"> Query <span class="required">*</span></label>
          <input type="text" id="query" class="input w-full" placeholder="Type something" />
        </div>

        <!-- Button -->
        <div class="px-4 py-2 bg-white text-end">
          <button>Prompt template</button>
        </div>
      </Card>

      <!--  LLM Chain card -->
      <Card label="LLM Chain" description="Chain to run queries against LLMs" color="orange">
        <div class="space-y-2 px-4 py-2">
          <label for="template">Template <span class="required">*</span></label>
          <div class="inline-flex gap-2 w-full">
            <input
              type="text"
              placeholder="You are a helpful car associate in a"
              class="input w-full"
            />
            <button class="btn-square"><i data-feather="arrow-up-right"></i></button>
          </div>
        </div>

        <!-- Query Field -->
        <div class="space-y-2 px-4 py-2 bg-white">
          <label for="query"> Query <span class="required">*</span></label>
          <input type="text" id="query" class="input w-full" placeholder="Type something" />
        </div>

        <!-- Button -->
        <div class="px-4 py-2 bg-white text-end">
          <button>Prompt template</button>
        </div>
      </Card>
    </div>
    <!-- Floating control buttons -->
    <div
      class="bg-white rounded-lg p-1 flex items-center gap-1 absolute bottom-5 left-5 h-fit w-fit shadow"
    >
      <button class="btn-square btn-ghost"><i data-feather="plus"></i></button>
      <button class="btn-square btn-ghost"><i data-feather="minus"></i></button>
      <button class="btn-square btn-ghost"><i data-feather="maximize"></i></button>
      <button class="btn-square btn-ghost"><i data-feather="lock"></i></button>
      <button class="btn-square btn-ghost"><i data-feather="corner-down-right"></i></button>
    </div>
    <div class="absolute bottom-5 right-5 space-y-2">
      <button class="btn-square bg-gray-100"><i data-feather="zap"></i></button>
      <button class="btn-square bg-gradient-to-br from-[#667EEA] to-[#764BA2] text-white">
        <i data-feather="maximize"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.board-canva {
  @apply relative w-full h-full overflow-hidden;
  background-color: white;
  background-image: radial-gradient(circle, #dbdbdb 1px, transparent 1px);
  background-size: 20px 20px;
}

.board-canva-content {
  @apply h-full overflow-scroll;
}

.card {
  width: 360px;
  @apply divide-y-2 py-4;
  @apply bg-purple-100 border-2 border-purple-500 rounded-lg;
}
</style>
