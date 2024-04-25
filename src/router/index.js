import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import StoreVuex from "../views/StoreVuex.vue";
import Options from "../views/Options.vue";
import Composition from "../views/Composition.vue";

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
  {
    path: "/options-api",
    name: "OptionsApi",
    component: Options,
  },
  {
    path: "/composition-api",
    name: "CompositionApi",
    component: Composition,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
