<template>
  <div
    id="about"
    class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center text-black scroll-smooth overflow-hidden"
  >
    <img
      class="w-40 mx-auto my-10"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZRzCOTmTpG-0zKoHeoNr8J-LeI_ihfZO3Q&s"
      alt="Profile picture"
    />
    <div class="max-w-[90%] mx-auto text-center custom-opacity" v-animate-on-scroll>
      <p class="text-3xl font-bold text-center lg:text-3xl">
        John James <br />
        Gallego Hernández
      </p>
      <p
        class="text-xl font-bold text-white bg-emerald-300 -skew-2 mt-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)] lg:text-3xl"
      >
        Desarrollador fullstack
      </p>
    </div>
    <div class="max-w-[90%] mx-auto mb-16 mt-12">
      <p class="text-center font-medium text-lg custom-opacity lg:text-base" v-animate-on-scroll>
        Desarrollador web fullstack con 3 años de experiencia creando aplicaciones digitales
        funcionales, escalables e intuitivas. Especializado en desarrollo web, con enfoque en la
        transformación de ideas complejas en interfaces claras.
      </p>
    </div>
    <div
      class="sticky bottom-0 w-full scale-125 p-10 h-44 bg-no-repeat bg-cover"
      style="background-image: url('/bg-hero.svg')"
    ></div>
    <button-component
      class="absolute bottom-20 left-1/2 -translate-x-1/2 custom-opacity z-10 !w-48"
      v-animate-on-scroll
      :label="'Descargar HV'"
      :icon="ArrowDownToLine"
    />
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

<style scoped>
.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
