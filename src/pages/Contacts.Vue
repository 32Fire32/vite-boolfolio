<script>
import axios from "axios";

import { store } from "../../store";

export default {
  name: "Contacts",
  data() {
    return {
      store,
      formData: {
        name: "",
        content: "",
        email: "",
      },
    };
  },
  methods: {
    addNewContact() {
      axios
        .post(`${this.store.api_url}/contacts`, {
          name: this.formData.name,
          content: this.formData.content,
          email: this.formData.email,
        })
        .then((response) => {
          console.log(res.data);
        });
    },
  },
};
</script>

<template>
  <div class="content">
    <h1>Contattaci:</h1>
    <form @submit.prevent="addNewContact()">
      <div class="mb-3">
        <label for="name" class="form-label">Nome:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Scrivi qui il tuo messaggio"
          v-model="formData.name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Scrivi qui la tua e-mail"
          v-model="formData.email"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Messaggio:</label>
        <textarea
          class="form-control"
          placeholder="Lascia qui il tuo messaggio"
          id="content"
          v-model="formData.content"
        ></textarea>
      </div>
      <button type="submit mt-3" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - (var(--header-height) + var(--footer-height)));
}
</style>
