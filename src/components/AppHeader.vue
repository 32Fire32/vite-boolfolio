<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="d-flex align-items-center justify-content-between">
    <h3>
      <router-link :to="{ name: 'homepage' }">Logo Boolfolio</router-link>
    </h3>
    <nav>
      <ul class="d-flex align-items-center justify-content-between">
        <li class="ms-2">
          <router-link :to="{ name: 'homepage' }">Home</router-link>
        </li>
        <li class="ms-2">
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
        <li class="ms-2">
          <router-link :to="{ name: 'contacts' }">Contacts</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  color: white;
  padding: 20px;
  background-color: black;
  h3 {
    margin-bottom: 0 !important;
  }
}
ul {
  list-style: none;
  margin-bottom: 0 !important;
}
</style>
