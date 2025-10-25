<template>
  <div class="text-center text-title">
    <h1 class="mb-4">{{ title }}</h1>
    <div class="w-20 h-1 mx-auto bg-black"></div>
  </div>
</template>

<script setup>
defineProps({ title: String, required: true });
</script>
