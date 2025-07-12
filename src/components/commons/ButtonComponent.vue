<template>
  <button
    class="flex gap-2 items-center justify-center bg-black text-white text-base sm:text-lg lg:text-base font-medium ring-1 ring-white ring-inset w-fit px-4 py-2 rounded-lg transition-colors hover:bg-white hover:text-black active:bg-black active:text-white active:ring-white lg:cursor-pointer"
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
