<template>
  <button
    class="flex gap-2 items-center justify-center bg-white text-black text-base sm:text-lg lg:text-base font-medium ring-1 ring-black ring-inset w-fit px-4 py-2 rounded-lg transition-colors hover:bg-black hover:text-white active:bg-white active:text-black active:ring-black lg:cursor-pointer xl:text-lg"
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
