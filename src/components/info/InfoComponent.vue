<template>
  <section id="study" class="mb-10">
    <p
      class="text-7xl pt-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-900 font-black text-start"
    >
      Sobre mi
    </p>
    <div class="my-10">
      <div class="inline-flex items-center gap-2">
        <div
          class="flex-shrink-0 w-16 h-16 p-3 rounded-full mx-auto mb-4 custom-opacity"
          v-animate-on-scroll
        >
          <GraduationCap class="h-full w-full text-light drop-shadow-lg drop-shadow-emerald-400" />
        </div>
        <div class="space-y-1 mb-4 custom-opacity text-light text-start" v-animate-on-scroll>
          <p class="text-2xl font-bold drop-shadow-lg drop-shadow-emerald-400 lg:text-3xl">Ingeniero informático</p>
          <p class="font-semibold text-lg drop-shadow-lg drop-shadow-emerald-400 lg:text-lg">
            Politécnico Colombiano Jaime Isaza Cadavid
          </p>
          <p class="text-base drop-shadow-lg drop-shadow-emerald-400 lg:text-base">Medellín, Antioquia</p>
          <p class="drop-shadow-lg drop-shadow-emerald-400">2016-2022</p>
        </div>
      </div>
    </div>
    <div class="bg-black">
      <stack-component />
    </div>
  </section>
</template>

<script setup>
import { GraduationCap } from "lucide-vue-next";
import { University } from "lucide-vue-next";
import StackComponent from "../stack/StackComponent.vue";
</script>
