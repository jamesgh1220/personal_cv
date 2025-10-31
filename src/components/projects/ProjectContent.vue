<template>
  <section
		class="fadeInUp group mb-10 border-b border-gray-300 lg:w-4/5 lg:mx-auto lg:transition-all lg:duration-300 lg:mt-0 lg:min-h-28 lg:hover:scale-110 lg:cursor-pointer"
	>
		<span class="font-semibold text-body mb-2 lg:relative lg:flex lg:items-center lg:gap-2 lg:transition-all lg:group-hover:duration-500 lg:group-hover:ml-4">
			<span class="hidden lg:block lg:w-0 lg:h-0 lg:bg-green lg:rounded-full lg:mr-1 lg:group-hover:w-2 lg:group-hover:h-2"></span>
			<span class="hidden lg:block">{{ project?.id }}. </span>
			<span class="lg:ml-4 lg:flex-1">{{ project?.name }}</span>
			<ArrowDownLeft class="hidden lg:block lg:h-full lg:right-0 lg:top-0 lg:transition-all lg:group-hover:text-green lg:group-hover:-rotate-[45deg] lg:size-7" />
		</span>
		<img class="aspect-video bg-light rounded-lg mt-4 lg:hidden" :src="project.image || ''" alt="project image" />
		<p class="py-4 font-normal lg:opacity-0 lg:h-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:group-hover:h-40 lg:duration-300">{{ project.description }}</p>
		<template v-for="(tech, index) in project.technologies" :key="index">
			<span class="inline-flex flex-wrap text-black text-base font-semibold lg:opacity-0 lg:transition-all lg:group-hover:duration-500 lg:group-hover:opacity-100 lg:!h-0 lg:group-hover:!h-fit">
				{{ tech }} <span v-show="(index + 1) !== project?.technologies?.length" class="mx-1">></span>
			</span>
		</template>
		<button-component
			class="my-4 lg:h-0 lg:opacity-0 lg:transition-all lg:group-hover:duration-200 lg:group-hover:h-fit lg:group-hover:opacity-100 text-black ring-1 ring-black ring-inset hover:bg-black hover:text-white active:bg-white active:text-black active:ring-black"
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
