<template>
  <div class="outline-1 outline-light w-fit mb-4 rounded-full">
    <p class="text-sm font-medium text-light px-3 py-1">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true, default: "" },
});
</script>
