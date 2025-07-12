<template>
  <div class="relative w-full max-w-2xl mx-auto bg-red-300">
    <!-- Viewport con tamaño fijo -->
    <div ref="viewport" class="w-full h-64 overflow-hidden relative">
      <!-- Slides container -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ width: slides.length * 100 + '%', transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full h-64 flex-shrink-0 flex items-center justify-center text-3xl font-bold"
          :style="{ width: 100 / slides.length + '%' }"
        >
          {{ slide }}
        </div>
      </div>
    </div>

    <!-- Botón izquierdo -->
    <button
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center text-xl font-bold justify-center z-10"
    >
      <
    </button>

    <!-- Botón derecho -->
    <button
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center text-xl font-bold justify-center z-10"
    >
      >
    </button>

    <!-- Puntos -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + index"
        @click="goTo(index)"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-black scale-125': currentIndex === index,
          'bg-gray-400': currentIndex !== index
        }"
      ></button>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from 'vue'

const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4']
const currentIndex = ref(0)

function next() {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = slides.length - 1
  }
}

function goTo(index) {
  currentIndex.value = index
}
</script>