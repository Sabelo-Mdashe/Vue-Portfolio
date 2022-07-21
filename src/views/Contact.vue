<template>
  <div class="container">
    <h1 class="mt-3 mb-4">Contact Me_</h1>
    <contactForm />
    <!-- <Footer /> -->
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
<style>
h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}
</style>
