<template>
  <div id="study" class="mb-10">
    <title-component title="Formación académica" class="my-8" />
    <div class="p-4">
      <div
        class="bg-dark w-16 h-16 p-3 rounded-full mx-auto mb-4 custom-opacity"
        v-animate-on-scroll
      >
        <GraduationCap class="h-full w-full text-blue" />
      </div>
      <div class="mb-4 text-center custom-opacity" v-animate-on-scroll>
        <p class="text-2xl text-blue font-bold lg:text-3xl">Ingeniería informática</p>
        <badge-component label="2016-2022" class="mx-auto mt-2" />
      </div>
      <div class="px-4 text-center">
        <div class="inline-flex mb-4 custom-opacity" v-animate-on-scroll>
          <div class="flex-shrink-0 mr-3">
            <div class="flex justify-center items-center bg-dark h-12 w-12 p-2 rounded-full">
              <university class="h-full w-full text-blue" />
            </div>
          </div>
          <div class="text-light">
            <h4 class="font-semibold text-base lg:text-lg">
              Politécnico Colombiano Jaime Isaza Cadavid
            </h4>
            <p class="font-light text-sm text-start lg:text-base">Medellín, Antioquia</p>
          </div>
        </div>
        <div class="custom-opacity" v-animate-on-scroll>
          <h4 class="font-bold text-lg text-blue lg:text-xl">Proyecto de grado</h4>
          <p class="text-light">Breve resumen proyecto de grado...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleComponent from "@/components/commons/TitleComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";
import { GraduationCap } from "lucide-vue-next";
import { University } from "lucide-vue-next";
</script>
