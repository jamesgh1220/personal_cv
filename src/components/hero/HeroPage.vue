<template>
  <!-- <side-menu /> -->
  <div class="relative">
    <section
      id="hero"
      class="relative h-screen flex flex-col lg:flex-row gap-5 sm:gap-10 p-6 sm:p-10 md:p-12 lg:p-16 justify-center bg-black overflow-hidden lg:items-center"
    >
      <div
        class="flex flex-col gap-5 sm:gap-10 lg:gap-4 lg:flex-1 lg:justify-center lg:items-start"
      >
        <personal-info-component />
        <div class="hidden lg:block">
          <social-component />
        </div>
      </div>
      <!-- <div class="flex flex-wrap justify-center gap-3 fadeInUp"> -->
      <div
        class="fadeInUp flex flex-col gap-5 sm:gap-10 lg:flex-1 lg:justify-center lg:items-center lg:h-full lg:gap-20"
      >
        <div class="hidden lg:flex">
          <label class="font-bold text-light border-r flex flex-col px-2 text-6xl text-center"
            >3+<br /><span class="text-base font-medium">años de<br />experiencia</span></label
          >
          <label class="font-bold pt-16 text-light flex flex-col px-2 text-6xl text-center"
            >10+<br /><span class="text-base font-medium">Proyectos</span></label
          >
        </div>
        <div class="lg:flex lg:w-full lg:justify-center lg:items-center lg:gap-4 lg:px-4">
          <button-component
            class="hidden lg:flex"
            :label="'Descargar HV'"
            :icon="ArrowDownToLine"
            @click="downloadCv"
          />
          <button-component
            class="mx-auto lg:mx-0"
            :label="'Mas sobre mi'"
            :icon="BookOpen"
            @click="scrollToSection('projects')"
          />
        </div>
        <!-- </div> -->
        <div class="block lg:hidden">
          <social-component />
        </div>
      </div>
      <div class="dot flex flex-col bg-light w-0 h-0 rounded-[50%] overflow-hidden absolute"></div>
    </section>
    <div id="next-content" class="opacity-0 transition-opacity duration-500">
      <projects-page />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import ProjectsPage from "../projects/ProjectsPage.vue";
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { animationsGsap } from "@/helpers/gsap";
// import SideMenu from "../commons/SideMenu.vue";
import { ArrowDownToLine, BookOpen } from "lucide-vue-next";
import SocialComponent from "../social-media/SocialComponent.vue";
import PersonalInfoComponent from "../personal-info/PersonalInfoComponent.vue";

const { splitText, pointEntrance, scrollToSection } = animationsGsap();

onMounted(async () => {
  pointEntrance();
  await splitText();
});
</script>
