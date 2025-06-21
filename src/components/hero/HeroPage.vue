<template>
  <section
    id="hero"
    class="relative h-screen flex flex-col gap-3 p-4 justify-center bg-black overflow-hidden"
  >
    <side-menu />
    <p
      id="name"
      class="split text-3xl lg:text-8xl font-bold text-light opacity-0 will-change-transform"
    >
      John James <br />Gallego Hernández<span>.</span>
    </p>
    <p class="split text-2xl font-black text-start text-green will-change-transform">
      Desarrollador FullStack
    </p>
    <p
      class="split text-light text-start font-normal max-w-11/12 text-base lg:text-xl lg:text-start will-change-transform"
    >
      Desarrollador web fullstack con 3 años de experiencia creando aplicaciones digitales
      funcionales, escalables e intuitivas. Especializado en desarrollo web, con enfoque en la
      transformación de ideas complejas en interfaces claras.
    </p>
    <div class="relative flex items-center w-full">
      <div class="absolute left-0 h-3 w-3 rounded-full bg-emerald-300"></div>
      <div class="w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
      <div class="text-light font-medium ml-2 text-sm">Medellin, Antioquia</div>
    </div>
    <div class="flex justify-center gap-2 mt-4">
      <button-component :label="'Descargar HV'" :icon="ArrowDownToLine" @click="downloadCv" />
      <button-component :label="'Mas sobre mi'" :icon="ArrowDownToLine" @click="downloadCv" />
    </div>
    <div class="flex justify-center items-center gap-4 mt-4">
      <a
        href="https://wa.me/+573133604722"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        v-animate-on-scroll
      >
        <img class="w-8" src="https://cdn.simpleicons.org/whatsapp/white" alt="GitHub" />
      </a>
      <a
        href="https://github.com/jamesgh1220"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        v-animate-on-scroll
      >
        <img class="w-8" src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/john-james-gallego-hern%C3%A1ndez/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
        v-animate-on-scroll
      >
        <Linkedin class="text-light" />
      </a>
    </div>
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
import { ArrowDownToLine, Linkedin } from "lucide-vue-next";

const { splitText, pointEntrance } = animationsGsap();

onMounted(async () => {
  pointEntrance();
  await splitText();
});
</script>
