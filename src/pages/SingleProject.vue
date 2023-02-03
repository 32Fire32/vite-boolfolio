<script>
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      project: "",
      newComment: "",
      newName: "",
    };
  },
  methods: {
    addNewComment() {
      axios
        .post(`http://127.0.0.1:8000/api/comments/${this.project.id}`, {
          name: this.newName,
          content: this.newComment,
        })
        .then((response) => {
          document.getElementById("comment").innerHTML = response.data;
          this.comments.push(response.data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$router.push({ name: "error-404" });
          }
        });
    },
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
  <div class="card p-2 w-50 my-5" v-if="project">
    <img
      v-if="project.image_url"
      :src="project.image_url"
      class="card-img-top w-50"
      :alt="project.name_project"
    />
    <div class="card-body">
      <h5 class="card-title">{{ project.name_project }}</h5>
      <span class="card-text"
        ><strong>Breve Descrizione:</strong>
        {{ project.summary }}
      </span>
      <div>
        <span v-if="project.type"
          ><strong>Tipologia:</strong> {{ project.type.name }}</span
        >
      </div>

      <div>
        <span> <strong>Tecnologia utilizzata:</strong> </span>
        <span class="mx-1" v-for="technology in project.technologies">
          /{{ technology.name }}/
        </span>
      </div>
    </div>
    <form action="" @submit.prevent="addNewComment">
      <input
        type="text"
        name="name"
        v-model="newName"
        placeholder="Inserisci il nome"
      />
      <input
        type="text"
        name="content"
        v-model="newComment"
        placeholder="Inserisci il commento"
      />
      <input type="submit" value="Invia" />
    </form>
    <div v-for="(comment, index) in project.comments" id="comment">
      {{ project.comments[index].content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
