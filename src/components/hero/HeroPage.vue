<template>
  <section
    id="hero"
    class="relative h-screen flex flex-col gap-3 p-4 justify-center bg-black overflow-hidden"
  >
    <side-menu />
    <personal-info-component />
    <div class="flex justify-center gap-2 mt-6 fadeInUp">
      <button-component :label="'Descargar HV'" :icon="ArrowDownToLine" @click="downloadCv" />
      <button-component :label="'Mas sobre mi'" :icon="BookOpen" @click="downloadCv" />
    </div>
    <social-component />
    <div class="dot bg-light w-0 h-0 rounded-[50%] absolute overflow-hidden">
      <projects-page />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import ProjectsPage from "../projects/ProjectsPage.vue";
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { animationsGsap } from "@/helpers/gsap";
import SideMenu from "../commons/SideMenu.vue";
import { ArrowDownToLine, BookOpen } from "lucide-vue-next";
import SocialComponent from "../social-media/SocialComponent.vue";
import PersonalInfoComponent from "../personal-info/PersonalInfoComponent.vue";

const { splitText, pointEntrance } = animationsGsap();

onMounted(async () => {
  pointEntrance();
  await splitText();
});
</script>
