<script>
import axios from "axios";

export default {
  name: "AppProjects",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<template>
  <h4>Lista dei progetti</h4>
</template>

<style lang="scss" scoped></style>
