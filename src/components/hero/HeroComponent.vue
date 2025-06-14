<template>
  <section
    id="about"
    class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center text-black scroll-smooth overflow-hidden"
  >
    <div>
      <img
        class="w-40 mx-auto my-10 custom-opacity"
        v-animate-on-scroll
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZRzCOTmTpG-0zKoHeoNr8J-LeI_ihfZO3Q&s"
        alt="Profile picture"
      />
      <div class="max-w-[90%] mx-auto text-center custom-opacity" v-animate-on-scroll>
        <p class="text-3xl font-bold text-center lg:text-4xl">
          John James <br />
          Gallego Hernández
        </p>
        <p
          class="w-fit mx-auto text-xl px-2 font-bold text-white bg-emerald-300 -skew-2 mt-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.75)] lg:text-2xl"
        >
          Desarrollador fullstack
        </p>
      </div>
    </div>
    <div>
      <div class="max-w-[90%] mx-auto pb-16 pt-12 md:max-w-[70%] md:pt-16 md:pb-24 lg:max-w-1/2">
        <p class="text-center font-medium text-lg custom-opacity" v-animate-on-scroll>
          Desarrollador web fullstack con 3 años de experiencia creando aplicaciones digitales
          funcionales, escalables e intuitivas. Especializado en desarrollo web, con enfoque en la
          transformación de ideas complejas en interfaces claras.
        </p>
      </div>
      <div
        class="relative w-full flex justify-center items-center md:items-start bg-black p-10 h-[calc(100vh-600px-6rem)] sm:h-[calc(100vh-544px-6rem)] md:h-[calc(100vh-592px-6rem)] custom-opacity before:bg-black before:h-4 before:sm:h-8 before:w-full before:absolute before:-top-2 before:sm:-top-4 before:-skew-2"
        v-animate-on-scroll
      >
        <div
          class="absolute -skew-2 scale-110 h-full bg-[linear-gradient(to_bottom,_#172e25_0%,_black_50%)] w-full -top-4 md:-top-8"
        ></div>
        <div class="flex justify-center items-center w-full">
          <button-component class="z-10 !w-48" :label="'Descargar HV'" :icon="ArrowDownToLine" />
        </div>
      </div>
    </div>
  </section>
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
#oval {
  /* border-radius: 100px / 50px; */
}

.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
