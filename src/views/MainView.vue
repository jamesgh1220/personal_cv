<template>
  <div class="bg-white min-h-fit">
    <nav-bar v-model="scrollToSection" />
    <div
      ref="scrollContainer"
      class="relative h-[calc(100vh-64px)] mt-[64px] z-20"
      @scroll="handleScroll"
      v-if="showContent"
    >
      <!-- <profile-pic class="animate-entrance" v-model="activeClass" /> -->
      <content-view class="overflow-x-hidden" />
    </div>
  </div>
  <!-- <loading-intro @show:content="showContent = true" /> -->
  <!-- <background-component v-model="activeClass" /> -->
  <scroll-up v-if="activeClass" />
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import ContentView from "./ContentView.vue";
import NavBar from "@/components/commons/NavBar.vue";
import ProfilePic from "@/components/commons/ProfilePic.vue";
import BackgroundComponent from "@/components/tools/BackgroundComponent.vue";
import LoadingIntro from "@/components/tools/LoadingIntro.vue";
import ScrollUp from "@/components/tools/ScrollUp.vue";

const scrollContainer = ref(null);
const showContent = ref(true);
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
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
