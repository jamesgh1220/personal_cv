<template>
  <div ref="sectionRef" class="relative w-full">
    <p
      :class="{ 'ml-4 lg:ml-12': isIntersecting }"
      class="relative z-20 w-fit bg-blue p-2 rounded text-light font-medium text-lg transition-all duration-300 lg:text-xl"
    >
      {{ title }}
    </p>
    <div class="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-blue z-10"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

defineProps({
  title: { type: String, required: true, default: "" },
});

const sectionRef = ref(null);
const { isIntersecting } = useIntersectionObserver(sectionRef);
</script>
