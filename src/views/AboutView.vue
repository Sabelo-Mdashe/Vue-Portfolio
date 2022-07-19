<template>
  <div class="about container">
    <h1 class="mt-3">Hello World_</h1>
    <div class="row mt-5">
      <div class="col shadow-lg">
        <img
          src="../assets/Selby.jpg"
          class="rounded img-selby mt-3 img-fluid"
          alt=""
        />
      </div>
      <div class="col col-text">
        <h4 class="mb-3">About Me</h4>
        <p>
          I am a hard-working individual who is passionate about technology. My
          passion for technology started when my mother brought home a
          PlayStation 2 console. I connected the console without needing a
          manual. I realised that I had a thing for technology and wanted to
          learn coding to build such technologies. I want to pursue a career in
          designing and developing websites. I still love to play video games. I
          am self taught in most of the things I do. I took an I.T course in
          college and I have not stopped trying to improve my skills since then.
          I have been taking online coding classes to sharpen my coding skills
          and engaging on real life projects.
        </p>

        <h4 class="mt-5 mb-3">Technical Skills</h4>
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Table from "../components/skillsTable.vue";

export default {
  components: {
    Table,
  },
};
</script>

<style>
.about {
  font-family: "Abhaya Libre", serif;
  font-size: 1rem;
}

h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

h4 {
  font-family: "Cinzel", serif;
}

.col-text {
  text-align: center;
}

p {
  text-align: justify;
}

.img-selby {
  height: 450px;
}
</style>
