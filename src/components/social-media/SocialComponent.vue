<template>
  <div class="flex justify-center items-center gap-4 mt-4 fadeInUp">
    <a
      class="lg:-skew-x-[20deg] lg:hover:-translate-1 lg:hover:!skew-x-0 lg:transition-all lg:duration-200"
      href="https://wa.me/+573133604722"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
      v-animate-on-scroll
    >
      <MessageCircle
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg drop-shadow-emerald-400"
      />
    </a>
    <a
      class="lg:-skew-x-[20deg] lg:hover:-translate-1 lg:hover:!skew-x-0 lg:transition-all lg:duration-200"
      href="https://github.com/jamesgh1220"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      v-animate-on-scroll
    >
      <Github
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg drop-shadow-emerald-400"
      />
    </a>
    <a
      class="lg:-skew-x-[20deg] lg:hover:-translate-1 lg:hover:!skew-x-0 lg:transition-all lg:duration-200"
      href="https://www.linkedin.com/in/john-james-gallego-hern%C3%A1ndez/"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
      v-animate-on-scroll
    >
      <Linkedin
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg drop-shadow-emerald-400"
      />
    </a>
  </div>
</template>

<script setup>
import { Linkedin, Github, MessageCircle } from "lucide-vue-next";
</script>
