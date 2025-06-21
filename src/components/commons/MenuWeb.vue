<template>
  <div
    class="flex items-center justify-center w-full mx-auto h-full border-b-2 bg-white/30 backdrop-blur-sm"
  >
    <div class="py-4 px-6 flex justify-center gap-8 text-black font-semibold text-lg rounded-lg">
      <a
        class="w-fit h-full ml-2 transition-all duration-200 md:ml-4"
        :class="{ 'font-bold !ml-8 border-b-2 border-green lg:!ml-0': item.selected }"
        v-for="item in menuItems"
        :key="item.id"
        @click="handleItemMenu(item)"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  {
    id: 1,
    to: "#about",
    label: "Sobre mi",
    selected: true,
  },
  {
    id: 2,
    to: "#portfolio",
    label: "Proyectos",
    selected: false,
  },
  {
    id: 3,
    to: "#worked",
    label: "Trabajos",
    selected: false,
  },
  {
    id: 4,
    to: "#study",
    label: "Estudios",
    selected: false,
  },
  {
    id: 5,
    to: "#stack",
    label: "Habilidades",
    selected: false,
  },
]);
</script>
