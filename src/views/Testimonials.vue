<template>
  <h1 class="mt-3">Testimonials_</h1>

  <div class="container d-flex gap-5">
    <Testify />
  </div>
</template>
<script>
import Testify from "../components/TestifyComponent.vue";
export default {
  components: {
    Testify,
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

.container {
  flex-wrap: wrap;
}
</style>
