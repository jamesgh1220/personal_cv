<template>
  <div class="fixed bottom-4 right-4 z-100">
    <div class="fadeInUp">
      <button
        @click="scrollToTop"
        round
        icon="sym_o_arrow_upward"
        class="h-12 w-12 opacity-80 rounded-full hover:opacity-100 transition-all duration-500 bg-black ring-2 ring-white ring-inset cursor-pointer"
      >
        <ArrowUp class="mx-auto text-light" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowUp } from "lucide-vue-next";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.fadeInUp {
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(70px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
