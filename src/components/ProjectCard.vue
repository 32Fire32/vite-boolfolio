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
      <span> <strong>Breve Descrizione:</strong> </span>
      <p class="card-text">
        {{ data.summary }}
      </p>
      <span v-if="data.type"
        ><strong>Tipologia:</strong> {{ data.type.name }}</span
      >
      <div class="d-flex align-items-center flex-wrap">
        <span> <strong>Tecnologia utilizzata:</strong> </span>
        <span class="mx-1" v-for="technology in data.technologies">
          /{{ technology.name }}/
        </span>
      </div>
      <a href="#" class="my-2 btn btn-primary">Go in detail</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
