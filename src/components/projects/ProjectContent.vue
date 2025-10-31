<template>
  <section
		class="fadeInUp space-y-2 group mb-10 border-b border-gray-300 lg:w-4/5 lg:mx-auto lg:transition-all lg:duration-300 lg:mt-0 lg:min-h-28 lg:hover:scale-110 lg:cursor-pointer"
	>
		<img class="aspect-video bg-light rounded-t-4xl mb-4 lg:hidden" :src="project.image || ''" alt="project image" />
		<span class=" dark:text-white font-bold text-body lg:relative lg:flex lg:items-center lg:gap-2 lg:transition-all lg:group-hover:duration-500 lg:group-hover:ml-4">
			<span class="hidden lg:block lg:w-0 lg:h-0 lg:bg-green lg:rounded-full lg:mr-1 lg:group-hover:w-2 lg:group-hover:h-2"></span>
			<span class="hidden lg:block">{{ project?.id }}. </span>
			<span class="lg:ml-4 lg:flex-1">{{ project?.name }}</span>
			<ArrowDownLeft class="hidden lg:block lg:h-full lg:right-0 lg:top-0 lg:transition-all lg:group-hover:text-green lg:group-hover:-rotate-[45deg] lg:size-7" />
		</span>
		<p class="text-light font-light lg:opacity-0 lg:h-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:group-hover:h-40 lg:duration-300">{{ project.description }}</p>
		<template v-for="(tech, index) in project.technologies" :key="index">
			<span class="bg-green/10 px-3 py-1 rounded-full inline-flex mr-3 flex-wrap text-green text-base font-semibold lg:opacity-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:!h-0 lg:group-hover:!h-fit">
				{{ tech }}
			</span>
		</template>
		<button-component
			class="my-4 lg:h-0 lg:opacity-0 lg:transition-all lg:group-hover:duration-200 lg:group-hover:h-fit lg:group-hover:opacity-100 text-black dark:text-white ring-1 ring-black dark:ring-white ring-inset hover:bg-black hover:text-white active:bg-white active:text-black active:ring-black"
			:label="'Ver proyecto'"
			:icon="Code"
		/>
	</section>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { ArrowDownLeft, Code } from 'lucide-vue-next';

defineProps({
	project: {
		type: Object,
		required: true
	},
});
</script>
