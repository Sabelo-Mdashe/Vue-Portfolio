<template>
  <div class="container projects">
    <h1 class="mt-3">My Projects_</h1>
    <div class="filter-links d-flex gap-5 mb-3">
      <span class="all_projects">All</span>
      <span class="green"
        ><i class="fa-solid fa-circle-dot dot-icon-green"></i> Completed</span
      >
      <span class="red"
        ><i class="fa-solid fa-circle-dot dot-icon-red"></i> Incomplete</span
      >
    </div>
    <ProjectCard />
  </div>
</template>
<script>
import projectCard from "../components/projectCard.vue";
import ProjectCard from "../components/projectCard.vue";

export default {
  components: {
    projectCard,
    ProjectCard,
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
