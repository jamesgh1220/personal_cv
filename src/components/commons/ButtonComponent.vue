<template>
  <button
    class="flex gap-2 items-center justify-center bg-black text-white text-sm font-medium ring-1 ring-white ring-inset w-fit px-4 py-2 rounded-lg transition-colors active:bg-white active:text-black active:ring-black lg:hover:bg-blue/50 lg:cursor-pointer"
  >
    <component class="size-5" :is="icon" v-if="icon" />
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  icon: { type: Function, required: true },
});
</script>
