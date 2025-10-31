<template>
  <div class="flex flex-col gap-4 mt-8 mb-20 fadeInUp xl:gap-8">
    <a
      class="p-4 inline-flex items-center gap-x-4 font-semibold text-body rounded-2xl inset-shadow-sm hover:inset-shadow-green/50 transition-all duration-300"
      href="https://wa.me/+573133604722"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
      v-animate-on-scroll
    >
      <MessageCircle
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg xl:size-10"
      />
      <span class="dark:text-white">WhatsApp</span>
    </a>
    <a
      class="p-4 inline-flex items-center gap-x-4 font-semibold text-body rounded-2xl inset-shadow-sm hover:inset-shadow-green/50 transition-all duration-300"
      href="https://github.com/jamesgh1220"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      v-animate-on-scroll
    >
      <Github
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg xl:size-10"
      />
      <span class="dark:text-white">GitHub</span>
    </a>
    <a
      class="p-4 inline-flex items-center gap-x-4 font-semibold text-body rounded-2xl inset-shadow-sm hover:inset-shadow-green/50 transition-all duration-300"
      href="https://www.linkedin.com/in/john-james-gallego-hern%C3%A1ndez/"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
      v-animate-on-scroll
    >
      <Linkedin
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg xl:size-10"
      />
      <span class="dark:text-white">Linkedin</span>
    </a>
    <a
      class="p-4 inline-flex items-center gap-x-4 font-semibold text-body rounded-2xl inset-shadow-sm hover:inset-shadow-green/50 transition-all duration-300"
      href="https://www.linkedin.com/in/john-james-gallego-hern%C3%A1ndez/"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
      v-animate-on-scroll
    >
      <Mail
        class="size-8 sm:size-9 lg:size-8 text-light drop-shadow-lg xl:size-10"
      />
      <span class="dark:text-white">Email</span>
    </a>
  </div>
</template>

<script setup>
import { Linkedin, Github, MessageCircle, Mail } from "lucide-vue-next";
</script>
