<script>
export default {
  name: "ProjectCard",
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="card p-2">
    <img
      v-if="data.image_url"
      :src="data.image_url"
      class="card-img-top"
      :alt="data.name_project"
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.name_project }}</h5>
      <span class="card-text"
        ><strong>Breve Descrizione:</strong>
        {{ data.summary }}
      </span>
      <router-link
        :to="{ name: 'single-project', params: { slug: data.slug } }"
        class="my-2 btn btn-primary"
        >Go in detail</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  min-height: 406px;
  background-color: gray;
  box-shadow: 10px 10px 10px 10px;
  transition: all 1s;
}
.card:hover {
  box-shadow: 0px 0px 0px 0px;
  transform: translate(10px);
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

img {
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
