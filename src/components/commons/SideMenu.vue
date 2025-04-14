<template>
  <div class="h-full w-14 flex justify-center items-center">
    <div @click="menuOpen = !menuOpen">
      <div v-if="!menuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="size-7 text-light"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div v-if="menuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="size-7 text-light"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  </div>
  <div
    class="absolute top-[4rem] -right-56 bg-dark w-56 transition-all duration-300 z-100"
    :class="{ 'block right-0 !z-100': menuOpen }"
  >
    <div class="flex flex-col p-3 my-2 font-plex text-light font-light">
      <a
        class="w-full h-full py-4 ml-2"
        :class="{ 'text-green font-semibold': item.selected }"
        v-for="item in menuItems"
        :key="item.id"
        :href="item.to"
        @click="handleItemMenu(item)"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
  <div
    v-if="menuOpen"
    class="fixed inset-0 top-[4rem] bg-[#00000059] transition-opacity duration-300 z-50"
    @click="menuOpen = false"
  ></div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

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
    label: "Experiencia laboral",
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

const handleItemMenu = (itemActive) => {
  menuItems.value.forEach((item) => {
    item.selected = false;
  });
  itemActive.selected = true;
};
</script>
