<script>
import axios from "axios";
import { store } from "../store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(`${this.store.api_url}/projects`).then((response) => {
      this.store.projects = response.data;
    });
    axios.get(`${this.store.api_url}/types`).then((response) => {
      this.store.types = response.data;
    });
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <AppMain />
  </div>
  <AppFooter />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
