<template>
  <div class="container projects">
    <h1 class="mt-3 mb-5">My Projects_</h1>

    <projectCard />
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
<style>
.projects {
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
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
</style>
