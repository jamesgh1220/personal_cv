<template>
  <!-- <side-menu /> -->
  <div class="relative">
    <section
      id="hero"
      class="relative h-screen flex flex-col lg:flex-row gap-5 sm:gap-10 p-6 sm:p-10 md:p-12 lg:p-16 justify-center bg-black overflow-hidden lg:items-center"
    >
      <div
        class="flex flex-col gap-8 sm:gap-10 lg:gap-8 lg:flex-1 lg:justify-center lg:items-start xl:gap-10"
      >
        <personal-info-component />
      </div>
      <div
        class="fadeInUp flex flex-col gap-5 sm:gap-10 lg:flex-1 lg:justify-center lg:items-center lg:h-full lg:gap-12"
      >
        <div class="hidden lg:flex lg:-skew-x-[20deg]">
          <label class="drop-shadow-lg drop-shadow-emerald-400 font-bold text-light border-r flex flex-col px-2 text-6xl text-center xl:text-8xl"
            >3+<br /><span class="text-base font-medium xl:text-xl">años de<br />experiencia</span></label
          >
          <label class="drop-shadow-lg drop-shadow-emerald-400 font-bold pt-16 text-light flex flex-col px-2 text-6xl text-center xl:text-8xl"
            >10+<br /><span class="text-base font-medium xl:text-xl">Proyectos</span></label
          >
        </div>
        <div>
          <social-component />
        </div>
        <div class="lg:flex lg:w-full lg:justify-center lg:items-center lg:gap-4 lg:px-4 xl:gap-6">
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
      </div>
      <div class="dot flex flex-col bg-light w-0 h-0 rounded-[50%] overflow-hidden absolute"></div>
      <div class="absolute blur-3xl -bottom-40 w-80 h-80 bg-[#3a7a61] rounded-full -left-40"></div>
      <div class="hidden lg:!block group">
        <div class="transition-all duration-300 lg:absolute lg:h-32 lg:w-32 lg:top-20 lg:right-20 lg:rounded-4xl border border-green -skew-[4deg] group-hover:top-24 group-hover:right-24"></div>
        <div class="transition-all duration-300 lg:absolute lg:h-32 lg:w-32 lg:top-24 lg:right-24 lg:rounded-4xl border border-green -skew-[4deg] group-hover:top-20 group-hover:right-20"></div>
      </div>
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
