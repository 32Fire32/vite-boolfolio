import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import Contacts from "./pages/Contacts.vue";
import SingleProject from "./pages/SingleProject.vue";
import Error404 from "./pages/Error404.vue";
import Types from "./pages/Types.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/about-me",
      name: "about",
      component: AboutMe,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/project/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/types",
      name: "list-types",
      component: Types,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error-404",
      component: Error404,
    },
  ],
});

export { router };
