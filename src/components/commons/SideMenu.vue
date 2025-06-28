<template>
  <div class="fadeInUp fixed top-0 right-0 z-20 h-16 w-full overflow-hidden lg:hidden">
    <div class="h-full float-end flex justify-end items-center w-fit px-4">
      <div class="hamburgers">
        <label class="hamburger z-20">
          <input type="checkbox" v-model="menuOpen" />
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </label>
      </div>
    </div>
  </div>
  <Transition name="slide-fade">
    <div v-if="menuOpen" class="text-white bg-black h-screen w-full fixed left-0 top-0 !z-10">
      <div class="full-h-menu-mobile">
        <div
          class="flex flex-col justify-center items-center gap-8 pt-8 text-light font-medium text-3xl"
        >
          <p
            class="split w-fit h-full ml-2 transition-all duration-200 md:ml-4"
            :class="{ 'font-bold border-b-2 border-green': item.selected }"
            v-for="item in menuItems"
            :key="item.id"
            @click="goToSection(item)"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onUnmounted } from "vue";
import { animationsGsap } from "@/helpers/gsap";

const { splitText, scrollToSection } = animationsGsap();
const menuOpen = ref(false);
const menuItems = ref([
  {
    id: 1,
    to: "#hero",
    label: "Sobre mi",
    selected: true,
  },
  {
    id: 2,
    to: "#projects",
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

const goToSection = (section) => {
  menuItems.value.forEach((item) => {
    item.selected = false;
  });
  section.selected = true;
  scrollToSection(section.to.replace("#", ""));
  menuOpen.value = false;
};
watch(menuOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
  if (val) {
    splitText();
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
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

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  height: 100vh;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
  height: 0px;
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
