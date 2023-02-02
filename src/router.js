import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import Contacts from "./pages/Contacts.vue";

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
  ],
});

export { router };
