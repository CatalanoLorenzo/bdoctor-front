import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AdvancedSearch from "./views/AdvancedSearch.vue";
import SingleProfile from "./views/SingleProfile.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/advanced-search",
      name: "advanced-search",
      component: AdvancedSearch,
    },
    {
      path: "/single-profile/:slug",
      name: "single-profile",
      component: SingleProfile,
    },
  ],
});

export { router };
