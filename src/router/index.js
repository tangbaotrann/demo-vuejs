import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import StoreVuex from "../views/StoreVuex.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/vuex-store",
    name: "Vuex",
    component: StoreVuex,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
