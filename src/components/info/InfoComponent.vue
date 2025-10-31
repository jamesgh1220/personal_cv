<template>
  <section id="study">
    <p class="relative text-green text-subtitle lg:mt-20"># <span class="text-black dark:text-white">Estudios</span></p>
    <div class="lg:flex">
      <div class="my-10 lg:flex-1 lg:my-0 lg:mt-8">
        <div class="inline-flex items-start gap-2 lg:h-full lg:w-full">
          <div
            class="flex-shrink-0 w-16 h-16 p-3 rounded-full mx-auto mb-4 custom-opacity lg:w-20 lg:h-20"
            v-animate-on-scroll
          >
            <GraduationCap class="h-full w-full text-black dark:text-green" />
          </div>
          <div class="space-y-1 mb-4 custom-opacity text-black text-center lg:text-start" v-animate-on-scroll>
            <p class="text-subtitle dark:text-white">Ingeniero informático</p>
            <p class="text-body dark:text-light">
              Politécnico Colombiano Jaime Isaza Cadavid
            </p>
            <p class="font-light text-body dark:text-light">Medellín, Antioquia</p>
            <p class="font-light dark:text-light">2016-2022</p>
          </div>
        </div>
      </div>
    </div>
    <StackComponent />
  </section>
</template>

<script setup>
import { GraduationCap, CodeXml, Rocket, Zap, Users } from "lucide-vue-next";
import StackComponent from '@/components/stack/StackComponent.vue';
</script>
