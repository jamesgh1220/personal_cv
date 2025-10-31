<template>
  <div class="h-dvh dark:!bg-black flex items-center justify-center overflow-hidden" v-if="showTitle">
    <h1
      class="fadeOut font-bold text-9xl text-green relative"
      @animationend="showTitle = false"
    >
      {{ animatedNumber }}<span class="text-6xl">%</span>
      <span
        class="absolute right-2 bottom-6 bg-black dark:bg-white w-2 h-2 opacity-0 rounded-full zoom-dot"
      ></span>
    </h1>
  </div>
  <div v-else class="min-h-screen flex flex-col bg-white transition-colors duration-1000 dark:bg-black">
    <HeaderComponent v-model="theme"/>
    <main class="flex-1 px-6 lg:px-20 xl:px-32">
      <HeroPage />
      <AboutComponent />
      <QualitiesComponent />
      <HabilitiesComponent />
      <ProjectsPage />
    </main>
    <!-- <footer class="bg-gray-800 text-white text-center p-3 mt-auto">
      <p>© 2025 Mi Aplicación</p>
    </footer> -->
    <ScrollUp v-if="activeClass" />
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted, defineAsyncComponent } from 'vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroPage from "@/components/hero/HeroPage.vue";
import ScrollUp from '@/components/tools/ScrollUp.vue';

const AboutComponent = defineAsyncComponent(() => import('@/components/about/AboutComponent.vue'));
const HabilitiesComponent = defineAsyncComponent(() => import('@/components/habilities/HabilitiesComponent.vue'));
const QualitiesComponent = defineAsyncComponent(() => import('@/components/qualities/QualitiesComponent.vue'));
const ProjectsPage = defineAsyncComponent(() => import('@/components/projects/ProjectsPage.vue'));

const showTitle = ref(true);
const activeClass = ref(false);
const animatedNumber = ref(0);
const theme = ref('light');

function applyTheme(value) {
  document.documentElement.classList.toggle('dark', value === 'dark');
}


watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
})

const handleScroll = () => {
  activeClass.value = window.scrollY > 50 ? true : false;
};

function animateNumber(start, end, duration) {
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Interpolación lineal
    animatedNumber.value = Math.floor(start + (end - start) * progress)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  setTimeout(() => {
    animateNumber(1, 100, 2000);
  }, 500);
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    theme.value = savedTheme;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme.value = prefersDark ? 'dark' : 'light';
  }

  applyTheme(theme.value);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fadeOut {
  animation: fadeOut 0.5s ease-in 4.5s forwards;
}

@keyframes zoomInOut {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
    transform: scale(400);
  }
  100% {
    opacity: 0;
    transform: scale(600);
  }
}

.zoom-dot {
  animation: zoomInOut 2.5s ease-in 3s forwards;
}
</style>

<!-- <template>
  <div class="bg-white min-h-fit" v-if="!isLoadingActive">
    <nav-bar v-model="scrollToSection" />
    <div
      ref="scrollContainer"
      class="relative h-[calc(100vh-64px)] mt-[64px] z-20"
      @scroll="handleScroll"
    >
      <content-view v-model="scrollToSection" />
    </div>
  </div>
  <loading-intro v-model="isLoadingActive" v-if="isLoadingActive" />
  <scroll-up v-if="activeClass" />
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import ContentView from "./ContentView.vue";
import NavBar from "@/components/commons/NavBar.vue";
import LoadingIntro from "@/components/tools/LoadingIntro.vue";
import ScrollUp from "@/components/tools/ScrollUp.vue";

const scrollContainer = ref(null);
const isLoadingActive = ref(true);
const activeClass = ref(false);
const scrollToSection = ref("");

const handleScroll = () => {
  activeClass.value = window.scrollY > 50 ? true : false;
};

watch(scrollToSection, (sectionId) => {
  const targetElement = document.getElementById(sectionId);
  if (!targetElement) return;

  const navbar = document.querySelector("nav");
  const navbarHeight = navbar ? navbar.offsetHeight : 64;

  const elementPosition = targetElement.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.scrollY - navbarHeight + 32;
  offsetPosition = sectionId === "about" ? 0 : offsetPosition;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
  scrollToSection.value = "";
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script> -->
