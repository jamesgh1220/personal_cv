<template>
  <button
    :class="customClass" class="cursor-pointer flex gap-3 items-center justify-center text-sm sm:text-lg lg:text-base font-medium w-fit px-4 py-3 rounded-xl transition-colors lg:cursor-pointer xl:text-lg"
  >
    {{ label }}
    <component class="size-5" :is="icon" v-if="icon" />
  </button>
</template>

<script setup>
defineProps({
  customClass: { type: String },
  label: { type: String, required: true },
  icon: { type: Function, required: true },
});
</script>
