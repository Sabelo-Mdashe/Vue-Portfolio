<template>
  <div class="container-fluid testimonials pt-3 pb-5">

    <h1>Testimonials_</h1>
  
    <div class="container d-flex">
      <Testify />
      <!-- <Footer /> -->
    </div>
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

.container-fluid {
  background-color: black;
  color: white;
}

.testimonials {
  height: 92vh;
}

.container {
  flex-wrap: wrap;
}
</style>
