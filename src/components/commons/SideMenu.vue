<template>
  <div class="fadeInUp flex justify-between items-center gap-5 w-full lg:hidden">
    <div ref="buttonRef">
      <div class="hamburgers">
        <label class="hamburger z-100">
          <input type="checkbox" v-model="menuOpen" />
          <span class="bar bg-black dark:bg-white"></span>
          <span class="bar bg-black dark:bg-white"></span>
          <span class="bar bg-black dark:bg-white"></span>
        </label>
      </div>
    </div>

    <svg
      @click="toggleTheme"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-sun transition-all duration-400 dark:stroke-white"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  </div>

  <Transition name="fade">
    <div
      v-if="menuOpen"
      class="text-white menu-mobile h-screen w-full fixed left-0 top-0 !z-10"
    >
      <div class="full-h-menu-mobile">
        <div
          ref="menuRef"
          class="flex flex-col justify-center items-center gap-8 pt-20 text-black font-medium text-3xl"
        >
          <p
            v-for="item in menuItems"
            :key="item.id"
            @click="goToSection(item)"
            class="max-w-44 h-full ml-2 text-center font-bold transition-all duration-200 md:ml-4 dark:text-white"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { animationsGsap } from "@/helpers/gsap";

const theme = defineModel();
const { scrollToSection } = animationsGsap();
const menuOpen = ref(false);
const menuRef = ref(null); // referencia al contenedor del menú
const buttonRef = ref(null); // referencia al botón hamburguesa

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

const menuItems = ref([
  { id: 1, to: "#hero", label: "Sobre mi" },
  { id: 2, to: "#projects", label: "Proyectos" },
  { id: 3, to: "#worked", label: "Trabajos" },
  { id: 4, to: "#study", label: "Estudios y habilidades" },
]);

const goToSection = (section) => {
  scrollToSection(section.to.replace("#", ""));
  menuOpen.value = false;
};

// 🔹 Detectar clics fuera del menú
function handleClickOutside(event) {
  const menuEl = menuRef.value;
  const buttonEl = buttonRef.value;

  // Si el menú está abierto y el clic fue fuera de él y del botón
  if (
    menuOpen.value &&
    menuEl &&
    !menuEl.contains(event.target) &&
    !buttonEl.contains(event.target)
  ) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
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
  z-index: 200;
}

.bar {
  display: block;
  width: 30px;
  height: 3px;
  margin: 6px auto;
  border-radius: 40px;
  transition: all 0.3s cubic-bezier(0.37, -1.11, 0.79, 2.02);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-mobile {
  backdrop-filter: blur(6px) saturate(140%);
  -webkit-backdrop-filter: blur(4px) saturate(140%);
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(209, 213, 219, 0.3);
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
