<template>
  <div id="stack">
    <p class="relative text-green text-subtitle lg:mt-20"># <span class="text-black">Tecnologías principales</span></p>
    <div class="py-10">
      <div class="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-3 mb-8 lg:grid-cols-2">
        <div
          class="bg-dark p-2 w-24 rounded-md lg:w-40"
          v-for="stack in strongStackExperience"
          :key="stack.id"
        >
          <div class="flex flex-col justify-center items-center gap-1 lg:gap-4">
            <img
              class="w-8 lg:size-16"
              :src="`https://cdn.simpleicons.org/${stack.icon}`"
              :alt="`Stack ${stack.text}`"
            />
            <p class="text-dark font-semibold">{{ stack.text }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="flex flex-wrap gap-x-2 justify-center lg:max-w-11/12 lg:mx-auto">
        <badge-component
          class="custom-opacity"
          v-animate-on-scroll
          v-for="stack in othersStackExperience"
          :key="stack.id"
          :label="stack.text"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import TitleComponent from "@/components/commons/TitleComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";
import { strongStackExperience, othersStackExperience } from "@/helpers/stack";
</script>
