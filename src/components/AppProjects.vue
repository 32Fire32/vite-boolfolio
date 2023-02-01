<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "AppProjects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<template>
  <h4>Lista dei progetti</h4>
  <div class="row">
    <div class="col-md-4 gy-2" v-for="project in projects">
      <ProjectCard :data="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
