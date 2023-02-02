<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <h3 class="text-center">
      <router-link :to="{ name: 'homepage' }">Boolfolio</router-link>
    </h3>
    <nav>
      <ul class="d-flex align-items-center justify-content-between">
        <li>
          <router-link :to="{ name: 'homepage' }">HOME</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">ABOUT</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contacts' }">CONTACTS</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #282828;
  color: white;
  height: var(--header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  nav {
    width: 70%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    margin: 20px;
    font-size: 3rem;
  }
}
ul {
  list-style: none;
  margin-bottom: 0 !important;
}
</style>
