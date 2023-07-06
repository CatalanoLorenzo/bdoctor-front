import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

//import SCSS
import "./assets/scss/general.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

createApp(App).use(router).mount("#app");
