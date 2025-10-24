<template>
  <section id="study" class="mb-10">
    <p
      class="text-7xl pt-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-900 font-black text-start"
    >
      Sobre mi
    </p>
    <p class="hidden lg:text-green lg:px-4 lg:text-2xl lg:drop-shadow-lg lg:drop-shadow-emerald-400 lg:block lg:mt-10"># <span class="text-light">Estudios y habilidades</span></p>
    <div class="lg:flex lg:mt-16">
      <div class="my-10 lg:flex-1">
        <div class="inline-flex items-center gap-2 lg:h-full lg:w-full lg:justify-center">
          <div
            class="flex-shrink-0 w-16 h-16 p-3 rounded-full mx-auto mb-4 custom-opacity lg:w-20 lg:h-20"
            v-animate-on-scroll
          >
            <GraduationCap class="h-full w-full text-light drop-shadow-lg drop-shadow-emerald-400" />
          </div>
          <div class="space-y-1 mb-4 custom-opacity text-light text-start" v-animate-on-scroll>
            <p class="text-2xl font-bold drop-shadow-lg drop-shadow-emerald-400 lg:text-3xl">Ingeniero informático</p>
            <p class="font-semibold text-lg lg:text-lg">
              Politécnico Colombiano Jaime Isaza Cadavid
            </p>
            <p class="text-base lg:text-base">Medellín, Antioquia</p>
            <p>2016-2022</p>
          </div>
        </div>
      </div>
      <div class="bg-black lg:flex-1">
        <stack-component />
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap } from "lucide-vue-next";
import StackComponent from "../stack/StackComponent.vue";
</script>
