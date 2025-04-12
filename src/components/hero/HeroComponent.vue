<template>
  <div id="about" class="flex flex-col justify-center text-light scroll-mt-80 mb-10">
    <div class="max-w-[90%] mx-auto my-8 text-center">
      <p class="text-2xl text-center font-plex">John James Gallego Hernández</p>
      <p class="text-xl font-semibold text-green">Desarrollador full-stack</p>
    </div>
    <div class="max-w-[80%] mx-auto mb-14">
      <p class="text-center text-base font-plex">
        Hola, soy desarrollador web full-stack con 3 años de experiencia creando soluciones
        digitales innovadoras que mezclen tecnología, diseño y funcionalidad. Me especializo en el
        desarrollo de aplicaciones web, me apasiona convertir ideas complejas en interfaces
        intuitivas y funcionales y me interesa aprender cosas nuevas, trabajar en equipo y siempre
        buscar formas de mejorar lo que hago.
      </p>
    </div>
    <button-component class="mx-auto" :label="'Descargar HV'" :icon="ArrowDownToLine" />
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { ArrowDownToLine } from "lucide-vue-next";
</script>
