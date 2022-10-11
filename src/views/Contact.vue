<template>
  <div class="container-fluid pt-3">
    <div
      class="container container-sm container-md container-lg container-xl container-xxl"
    >
      <h1>Contact Me_</h1>
      <contactForm />
      <Footer />
    </div>
  </div>
</template>
<script>
import contactForm from "../components/contactForm.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    contactForm,
    Footer,
  },
};
</script>
<style scoped>
.container-fluid {
  background-color: black;
  min-height: 92vh;
  color: white;
  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) ), url("https://wallpapersmug.com/download/3840x2400/2197f3/programming-code-colorful.jpg");
background-size: cover; */
}

h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

@media screen and (max-width: 412px) {
  .mt-3 {
    margin-top: 0 !important;
  }
}
</style>
