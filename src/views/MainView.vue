<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-black">
    <HeaderComponent />
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
import { ref, onUnmounted, onMounted, defineAsyncComponent } from 'vue';
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroPage from "@/components/hero/HeroPage.vue";
import ScrollUp from '@/components/tools/ScrollUp.vue';

const AboutComponent = defineAsyncComponent(() => import('@/components/about/AboutComponent.vue'));
const HabilitiesComponent = defineAsyncComponent(() => import('@/components/habilities/HabilitiesComponent.vue'));
const QualitiesComponent = defineAsyncComponent(() => import('@/components/qualities/QualitiesComponent.vue'));
const ProjectsPage = defineAsyncComponent(() => import('@/components/projects/ProjectsPage.vue'));

const activeClass = ref(false);

const handleScroll = () => {
  activeClass.value = window.scrollY > 50 ? true : false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

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
