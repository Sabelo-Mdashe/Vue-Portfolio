<template>
  <h1 class="mt-3">Testimonials_</h1>

  <div class="container d-flex">
    <Testify />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Testify from "../components/TestifyComponent.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Testify,
    Footer,
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
