<template>
  <div class="container-fluid pt-3">
  <div class="container projects">
    <h1 class="mb-5">My Projects_</h1>

    <projectCard />
  </div>
</div>
</template>
<script>
import projectCard from "../components/projectCard.vue";

export default {
  components: {
    projectCard,
  },
};
</script>
<style scoped>
.container-fluid {
  background-color: black;
}

.projects {
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
  color: white;
}

h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

.dot-icon-green,
.green:hover {
  color: green;
  cursor: pointer;
}

.dot-icon-red,
.red:hover {
  color: red;
  cursor: pointer;
}

.all_projects {
  cursor: pointer;
}

/* MEDIA QUERIES */

@media screen and (max-width: 415px) {
  .mt-3 {
    margin-top: 0 !important;
  }

  .mb-5 {
    margin-bottom: 10px !important;
  }
}
</style>
