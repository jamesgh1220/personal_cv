<template>
  <div
    :class="customClass"
    class="flex justify-center items-center bg-dark absolute top-0 z-100 h-screen w-full transition-all duration-1000"
  >
    <p :class="customClassLabel" class="fadeIn custom-label text-light text-[4rem]">
      {{ customLabel }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["show:content"]);

const customClass = ref("");
const customClassLabel = ref("fadeIn");
const customLabel = ref("0%");

const startLoading = () => {
  const total = 100;
  const duration = 5000;
  const intervalTime = duration / total;
  let current = 0;

  const interval = setInterval(() => {
    current++;
    customLabel.value = `${current}%`;

    if (current >= total) {
      clearInterval(interval);
      setTimeout(() => {
        customClass.value = "!h-0 !opacity-0";
        emit("show:content");
      }, 500);
    }
  }, intervalTime);
};

onMounted(() => {
  setTimeout(() => {
    startLoading();
  }, 500);
});
</script>

<style>
.custom-label::first-letter {
  font-size: 6rem;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 1.5s ease forwards;
}
</style>
