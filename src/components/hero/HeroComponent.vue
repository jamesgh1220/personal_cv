<template>
  <div
    id="about"
    class="relative h-[calc(100vh-4rem)] flex flex-col justify-center text-black mb-10 scroll-smooth overflow-hidden"
  >
    <div class="max-w-[90%] mx-auto mb-8 text-center custom-opacity" v-animate-on-scroll>
      <p class="text-4xl font-bold text-center lg:text-3xl">John James Gallego Hernández</p>
      <p
        class="text-2xl font-bold text-white bg-emerald-300 -skew-2 mt-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)] lg:text-3xl"
      >
        Desarrollador fullstack
      </p>
    </div>
    <div class="max-w-[90%] mx-auto mb-14">
      <p class="text-center font-medium text-xl custom-opacity lg:text-base" v-animate-on-scroll>
        Desarrollador web fullstack con 3 años de experiencia creando aplicaciones digitales
        funcionales, escalables e intuitivas. Especializado en desarrollo web, con enfoque en la
        transformación de ideas complejas en interfaces claras.
      </p>
    </div>
    <!-- @click="downloadCv" -->
    <div
      class="absolute left-1/2 -translate-x-1/2 -bottom-64 w-full p-10 h-96 bg-no-repeat bg-cover"
      style="background-image: url('/bg-hero.svg')"
    >
      <button-component
        class="custom-opacity relative z-10"
        v-animate-on-scroll
        :label="'Descargar HV'"
        :icon="ArrowDownToLine"
      />
    </div>
    <!-- <div
      class="absolute h-[33rem] w-[33rem] ring-4 ring-green ring-inset left-1/2 -translate-x-1/2 -bottom-96 rounded-full bg-black"
    ></div> -->
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { ArrowDownToLine } from "lucide-vue-next";

const downloadCv = () => {
  const link = document.createElement("a");
  link.href = "/assets/hv/HVJJGH.pdf";
  link.download = "JohnJamesGallegoHernandezHV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
