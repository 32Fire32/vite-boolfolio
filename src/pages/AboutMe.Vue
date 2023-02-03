<script>
export default {
  name: "AboutMe",
};
</script>

<template>
  <div class="content">
    <h1>About Me</h1>
  </div>
</template>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - (var(--header-height) + var(--footer-height)));
}
</style>
