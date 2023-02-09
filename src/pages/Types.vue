<script>
import { store } from "../../store";
import axios from "axios";

export default {
  name: "Types",
  data() {
    return {
      store,
      filteredProjects: {},
    };
  },
  created() {
    axios.get(`${this.store.api_url}/projects`).then((response) => {
      this.store.projects = response.data;
      console.log(store.projects[0].type.id);
    });
    axios.get(`${this.store.api_url}/types`).then((response) => {
      this.store.types = response.data;
    });
  },
  methods: {
    arrayFilter(item_id) {
      this.filteredProjects = store.projects.filter(function (elm, index) {
        return elm.type === null ? "" : elm.type.id == item_id;
      });
      console.log(this.filteredProjects);
    },
  },
};
</script>

<template>
  <section class="content d-flex flex-column align-items-center my-3">
    <h1>La lista delle tecnologie</h1>
    <div class="dropdown" v-for="(item, index) in store.types">
      <button
        class="btn btn-secondary dropdown-toggle my-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        @click="arrayFilter(item.id)"
      >
        {{ item.name }}
      </button>
      <ul class="dropdown-menu">
        <li v-for="(project, i) in this.filteredProjects">
          <router-link
            :to="{ name: 'single-project', params: { slug: project.slug } }"
            class="dropdown-item"
            href="#"
            ><span
              >presente in: <strong>{{ project.slug }}</strong></span
            ></router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - (var(--header-height) + var(--footer-height)));
}
</style>
