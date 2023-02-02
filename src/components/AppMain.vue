<script>
export default {
  name: "AppMain",
};
</script>

<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<style lang="scss" scoped>
section {
  overflow-y: auto;
  height: calc(100vh - (var(--header-height) + var(--footer-height)));
}
</style>
