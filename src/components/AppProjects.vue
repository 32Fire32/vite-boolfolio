<script>
import { store } from "../../store";

import ProjectCard from "./ProjectCard.vue";

export default {
  name: "AppProjects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="row my-3">
    <div class="col-md-4 gy-2" v-for="project in store.projects">
      <ProjectCard :data="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
