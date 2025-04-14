<template>
  <div id="stack" class="mb-10">
    <title-component title="Habilidades técnicas" class="my-8" />
    <div class="p-4">
      <div class="grid grid-cols-2 place-items-center gap-3 mb-8">
        <div
          class="bg-dark p-2 w-24 rounded-md custom-opacity"
          v-animate-on-scroll
          v-for="stack in strongStackExperience"
          :key="stack.id"
        >
          <div class="flex flex-col justify-center items-center gap-1">
            <img
              class="w-8"
              :src="`https://cdn.simpleicons.org/${stack.icon}`"
              :alt="`Stack ${stack.text}`"
            />
            <p class="text-light">{{ stack.text }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-x-2">
        <badge-component
          class="custom-opacity"
          v-animate-on-scroll
          v-for="stack in othersStackExperience"
          :key="stack.id"
          :label="stack.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleComponent from "@/components/commons/TitleComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";
import { strongStackExperience, othersStackExperience } from "@/helpers/stack";
</script>
