<template>
  <div id="about" class="flex flex-col justify-center text-light mb-10 scroll-smooth">
    <div class="max-w-[90%] mx-auto my-8 text-center custom-opacity" v-animate-on-scroll>
      <p class="text-2xl text-center font-plex lg:text-3xl">John James Gallego Hernández</p>
      <p class="text-2xl font-semibold text-blue lg:text-3xl">Desarrollador fullstack</p>
    </div>
    <div class="max-w-[80%] mx-auto mb-14">
      <p class="text-center text-sm font-plex custom-opacity lg:text-base" v-animate-on-scroll>
        Hola, soy desarrollador web fullstack con 3 años de experiencia creando soluciones digitales
        innovadoras que mezclen tecnología, diseño y funcionalidad. Me especializo en el desarrollo
        de aplicaciones web, me apasiona convertir ideas complejas en interfaces intuitivas y
        funcionales y me interesa aprender cosas nuevas, trabajar en equipo y siempre buscar formas
        de mejorar lo que hago.
      </p>
    </div>
    <button-component
      class="mx-auto custom-opacity"
      v-animate-on-scroll
      :label="'Descargar HV'"
      :icon="ArrowDownToLine"
      @click="downloadCv"
    />
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { ArrowDownToLine } from "lucide-vue-next";

const downloadCv = () => {
  const link = document.createElement("a");
  link.href = "/assets/pdfs/HVJJGH.pdf";
  link.download = "JohnJamesGallegoHernandezHV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
