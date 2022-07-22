<template>
  <div class="container">
    <h1 class="mt-3 mb-4">Contact Me_</h1>
    <contactForm />
    <div class="mt-5 d-flex">
      <span>
        <a href="https://github.com/Sabelo-Mdashe" target="_blank"
          ><i class="fa-brands fa-github fs-2 github-icon"></i
        ></a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/sabelo-mdashe/" target="_blank">
          <i class="fa-brands fa-linkedin fs-2 linkedin-icon"></i>
        </a>
      </span>
      <span>
        <a href="mailto:selbysabelomdashe@gmail.com" target="_blank">
          <i class="fa-solid fa-at fs-2"></i>
        </a>
      </span>
      <span>
        <a href="mailto:selbysabelomdashe@gmail.com" target="_blank">
          <i class="fa-brands fa-whatsapp-square fs-2"></i>
        </a>
      </span>
      <span>
        <a href="mailto:selbysabelomdashe@gmail.com" target="_blank">
          <i class="fa-brands fa-facebook fs-2"></i>
        </a>
      </span>
    </div>
  </div>
</template>
<script>
import contactForm from "../components/contactForm.vue";
export default {
  components: {
    contactForm,
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

.d-flex {
  justify-content: space-around;
}

.fa-whatsapp-square:hover {
  color: green;
}

</style>
