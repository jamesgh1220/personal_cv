import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import vAnimateOnScroll from "./directives/v-animate-on-scroll";

const app = createApp(App);

app.use(router);

app.directive("animate-on-scroll", vAnimateOnScroll);

app.mount("#app");
