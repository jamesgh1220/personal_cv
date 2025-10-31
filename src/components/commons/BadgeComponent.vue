<template>
  <div class="w-fit mb-4 rounded-full">
    <p class="text-body font-medium dark-light px-3 py-1">
      {{ label }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true, default: "" },
});
</script>
