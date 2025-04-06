import { ref, onMounted, onUnmounted } from "vue";

export function useIntersectionObserver(targetRef, options = { threshold: 0.5 }) {
  const isIntersecting = ref(false);
  let observer = null;

  const stopObserver = () => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value);
    }
  };

  const startObserver = () => {
    if (!targetRef.value) return;

    observer = new IntersectionObserver(([entry]) => {
      isIntersecting.value = entry.isIntersecting;
    }, options);

    observer.observe(targetRef.value);
  };

  onMounted(() => {
    startObserver();
  });

  onUnmounted(() => {
    stopObserver();
  });

  return {
    isIntersecting,
    stopObserver,
    startObserver,
  };
}
