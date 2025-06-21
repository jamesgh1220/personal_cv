<template>
  <div class="absolute top-0 h-16 w-full z-0 lg:hidden">
    <div class="h-full float-end flex justify-end items-center w-fit px-4">
      <div class="hamburgers">
        <label class="hamburger">
          <input type="checkbox" v-model="menuOpen" />
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </label>
      </div>
    </div>
  </div>
  <div v-if="menuOpen" class="text-white bg-red-300 h-40 w-full absolute left-0 top-16 !z-10">
    a
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<style>
.hamburgers {
  justify-content: center;
  align-items: center;
}

.hamburger {
  cursor: pointer;
  padding-bottom: 3px;
  position: relative;
}

.hamburger input {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

.bar {
  display: block;
  width: 30px;
  height: 3px;
  margin: 6px auto;
  border-radius: 40px;
  transition: all 0.3s cubic-bezier(0.37, -1.11, 0.79, 2.02);
  background-color: #404040;
}

.hamburger input:checked ~ .bar:nth-child(2) {
  transform: translateY(9.5px) rotate(45deg);
}

.hamburger input:checked ~ .bar:nth-child(3) {
  opacity: 0;
}

.hamburger input:checked ~ .bar:nth-child(4) {
  transform: translateY(-8px) rotate(-45deg);
}
</style>

<!-- <template>
  <div class="h-full w-full bg-white/30 backdrop-blur-sm">
    <div class="h-full w-14 flex justify-center items-center">
      <div @click="menuOpen = !menuOpen">
        <div v-show="!menuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-7 text-black cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div v-show="menuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-7 text-black"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div
    class="absolute top-[4rem] left-0 w-full transition-all duration-200 z-100 bg-white/30 backdrop-blur-sm"
    :class="{ 'opacity-0 -translate-y-4': !menuOpen }"
  >
    <div class="flex flex-col gap-4 p-3 text-black font-medium text-xl">
      <a
        class="w-fit h-full ml-2 transition-all duration-200 md:ml-4"
        :class="{ 'font-bold !ml-8 border-b-2 border-green': item.selected }"
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

const scrollToSection = defineModel();
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
  if (menuOpen.value) {
    scrollToSection.value = itemActive.to.replace("#", "");
    menuItems.value.forEach((item) => {
      item.selected = false;
    });
    itemActive.selected = true;
  }
};
</script> -->
