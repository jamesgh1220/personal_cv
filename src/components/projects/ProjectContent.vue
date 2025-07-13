<template>
  <section
		class="fadeInUp group mb-10 border-b border-gray-300 lg:w-4/5 lg:mx-auto lg:transition-all lg:duration-700 lg:mt-0 lg:min-h-28"
	>
		<span class="split text-2xl font-semibold mb-2 lg:relative lg:flex lg:items-center lg:gap-2 lg:transition-all lg:group-hover:duration-500 lg:group-hover:ml-4">
			<span class="hidden lg:block">{{ project?.id }}. </span>
			{{ project?.name }}
			<ArrowDownLeft class="hidden lg:block lg:absolute lg:h-full lg:right-0 lg:top-0 lg:transition-all lg:group-hover:text-green lg:group-hover:-rotate-[45deg] lg:size-7" />
		</span>
		<img class="aspect-video bg-light rounded-lg mt-4 lg:hidden" :src="project.image || ''" alt="project image" />
		<p class="py-4 font-normal lg:opacity-0 lg:h-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:group-hover:h-24 lg:duration-300">{{ project.description }}</p>
		<template v-for="(tech, index) in project.technologies" :key="index">
			<span class="inline-flex flex-wrap text-black text-base font-semibold lg:opacity-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:!h-0 lg:group-hover:!h-fit">
				{{ tech }} <span v-show="(index + 1) !== project?.technologies?.length" class="mx-1">></span>
			</span>
		</template>
		<button-white class="my-4 lg:h-0 lg:opacity-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:h-fit lg:group-hover:opacity-100" :label="'Ver proyecto'" :icon="Code" />
	</section>
</template>

<script setup>
import ButtonWhite from "@/components/commons/ButtonWhite.vue";
import { ArrowDownLeft, Code } from 'lucide-vue-next';

defineProps({
	project: {
		type: Object,
		required: true
	},
});
</script>
