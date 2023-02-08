<script>
import axios from "axios";
import { store } from "../../store";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: "",
      createdComment: false,
      commentError: false,
      commentData: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    addNewComment() {
      axios
        .post(`${this.store.api_url}/comments/${this.project.id}`, {
          name: this.commentData.name,
          content: this.commentData.content,
        })
        .then((response) => {
          this.project.comments.push(response.data);
          (this.commentData.name = ""), (this.commentData.content = "");
          this.createdComment = true;
          if (this.commentError) {
            this.commentError = false;
          }
        })
        .catch((err) => {
          this.commentError = err.response.data;

          if (this.createdComment) {
            this.createdComment = false;
          }
        });
    },
  },
  created() {
    axios
      .get(`${this.store.api_url}/projects/${this.$route.params.slug}`)
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

      <div v-if="project.technologies.length > 0">
        <span>
          <strong>Tecnologia utilizzata:</strong>
        </span>
        <span class="mx-1" v-for="technology in project.technologies">
          /{{ technology.name }}/
        </span>
      </div>
    </div>
    <!-- <div v-if=""> -->
    <form action="" @submit.prevent="addNewComment">
      <div class="d-flex my-3 align-items-end justify-content-between">
        <div>
          <label class="form-label" for="name">Nome: </label>
          <input
            class="form-control"
            type="text"
            id="name"
            v-model="commentData.name"
            placeholder="Inserisci il nome"
          />
        </div>
        <div class="ms-2">
          <label class="form-label" for="content">Commento:</label>
          <input
            class="form-control"
            type="text"
            id="content"
            v-model="commentData.content"
            placeholder="Inserisci il commento"
            required
          />
        </div>
        <input class="btn btn-primary ms-2" type="submit" value="Invia" />
      </div>
    </form>
    <ul>
      <li
        v-for="(comment, index) in project.comments"
        id="comment"
        class="list-unstyled"
      >
        <strong v-if="comment.name">{{ comment.name }}</strong
        ><strong v-else>Anonimo</strong> scrive:
        <em>{{ comment.content }}</em>
      </li>
    </ul>
    <div class="alert">
      <div class="mt-3 alert alert-success" role="alert" v-if="createdComment">
        Commento creato con successo
      </div>
      <div class="mt-3 alert alert-danger" role="alert" v-if="commentError">
        <div>Errore nella creazione del commento</div>
        <ul>
          <li v-for="errors in commentError.errors">
            <div v-for="error in errors">{{ error }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<style lang="scss" scoped>
.card {
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 10px 10px;
}
</style>
