<script>
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      project: null,
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.$router.push({ name: "error-404" });
        }
      });
  },
};
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name_project }}</h1>
    <p>{{ project.summary }}</p>
    <img :src="project.image_url" :alt="project.name_project" />
  </div>
</template>

<style lang="scss" scoped></style>
