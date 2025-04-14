// src/directives/v-animate-on-scroll.js
export default {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("custom-opacity");
          el.classList.add("animate-entrance");
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.3,
      }
    );
    observer.observe(el);
  },
};
