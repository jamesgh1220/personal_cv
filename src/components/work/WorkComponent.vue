<template>
  <div id="worked" class="mb-10">
    <title-component title="Experiencia laboral" class="my-8" />
    <div class="p-4 md:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Línea vertical -->
          <div
            class="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue to-dark transform -translate-x-1/2"
          ></div>

          <!-- Items del timeline -->
          <div v-for="(item, index) in laboralExperience" :key="index" class="mb-10">
            <div class="relative flex items-start">
              <!-- Circulo de fecha -->
              <div
                class="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 custom-opacity"
                v-animate-on-scroll
              >
                <div
                  class="w-12 h-12 rounded-full outline outline-blue bg-dark shadow-lg flex items-center justify-center"
                >
                  <span class="text-sm font-medium text-light lg:text-base">{{
                    getYear(item.startDate)
                  }}</span>
                </div>
              </div>

              <!-- Contenido -->
              <div
                class="ml-16 w-full md:ml-0 md:w-1/2 md:pr-12 md:text-right"
                :class="{ 'md:pl-12 md:pr-0 md:text-left md:ml-auto': index % 2 !== 0 }"
              >
                <div
                  class="rounded-lg shadow-md border border-blue p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 custom-opacity"
                  v-animate-on-scroll
                >
                  <div class="flex flex-col custom-opacity" v-animate-on-scroll>
                    <h3 class="text-xl font-bold text-blue text-start lg:text-2xl">
                      {{ item.company }}
                    </h3>
                    <h4 class="text-base font-semibold text-light mb-2 text-start lg:text-lg">
                      {{ item.role }}
                    </h4>

                    <badge-component
                      :label="`${formatDate(item.startDate)} - ${
                        item.current ? 'Presente' : formatDate(item.endDate)
                      }`"
                    />

                    <div class="space-y-2 mt-4 mb-1">
                      <ul class="space-y-2 custom-opacity" v-animate-on-scroll>
                        <li
                          v-for="(task, taskIndex) in item.tasks"
                          :key="taskIndex"
                          class="flex items-start"
                        >
                          <span
                            class="inline-block w-2 h-2 rounded-full bg-blue mt-1.5 mr-2 flex-shrink-0"
                          ></span>
                          <span class="text-sm text-light text-start lg:text-base">{{
                            task.text
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { laboralExperience } from "@/helpers/works";
import TitleComponent from "@/components/commons/TitleComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";

// Formatear fecha para mostrarla de forma legible
const formatDate = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("es-ES", { month: "short", year: "numeric" });
};

// Obtener solo el año para el círculo del timeline
const getYear = (date) => date.getFullYear();
</script>
