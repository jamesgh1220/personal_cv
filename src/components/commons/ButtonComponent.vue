<template>
  <button
    class="flex gap-2 bg-dark text-light font-medium outline outline-sky-300 w-fit px-3 py-2 rounded-lg transition-all duration-100 lg:hover:bg-blue/50 lg:cursor-pointer"
  >
    <component class="text-blue" :is="icon" v-if="icon" />
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  icon: { type: Function, required: true },
});
</script>
