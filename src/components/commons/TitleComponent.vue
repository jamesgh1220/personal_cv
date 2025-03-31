<template>
  <div class="relative w-full">
    <p class="relative z-20 w-fit ml-4 bg-blue p-2 rounded text-light">{{ title }}</p>
    <div class="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-blue z-10">-</div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true, default: "" },
});
</script>
