<template>
  <section id="study">
    <p class="relative text-green text-subtitle lg:hidden"># <span class="text-black">Estudios</span></p>
    <div class="lg:flex lg:mt-16">
      <div class="my-10 lg:flex-1">
        <div class="inline-flex items-start gap-2 lg:h-full lg:w-full lg:justify-center">
          <div
            class="flex-shrink-0 w-16 h-16 p-3 rounded-full mx-auto mb-4 custom-opacity lg:w-20 lg:h-20"
            v-animate-on-scroll
          >
            <GraduationCap class="h-full w-full text-black" />
          </div>
          <div class="space-y-1 mb-4 custom-opacity text-black text-center" v-animate-on-scroll>
            <p class="text-subtitle g:text-3xl">Ingeniero informático</p>
            <p class="text-body">
              Politécnico Colombiano Jaime Isaza Cadavid
            </p>
            <p class="font-light text-body">Medellín, Antioquia</p>
            <p class="font-light">2016-2022</p>
          </div>
        </div>
      </div>
    </div>
    <StackComponent />
    <ul class="space-y-6">
      <li class="space-y-2">
        <CodeXml class="size-8 text-green" />
        <p class="text-body font-bold">Código limpio</p>
        <span class="text-base text-light">Escribo código mantenible y escalable siguiendo las mejores prácticas</span>
      </li>
      <li class="space-y-2">
        <Rocket class="size-8 text-green" />
        <p class="text-body font-bold">Código limpio</p>
        <span class="text-base text-light">Siempre explorando nuevas tecnologías y metodologías</span>
      </li>
      <li class="space-y-2">
        <Zap class="size-8 text-green" />
        <p class="text-body font-bold">Código limpio</p>
        <span class="text-base text-light">Optimización constante para experiencias rápidas y fluidas</span>
      </li>
      <li class="space-y-2">
        <Users class="size-8 text-green" />
        <p class="text-body font-bold">Código limpio</p>
        <span class="text-base text-light">Trabajo efectivo en equipo y comunicación clara</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { GraduationCap, CodeXml, Rocket, Zap, Users } from "lucide-vue-next";
import StackComponent from '@/components/stack/StackComponent.vue';
</script>
