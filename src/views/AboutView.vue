<template>
  <div class="container-fluid">
  <div
    class="about container container-sm container-md container-lg container-xl container-xxl pt-3"
  >
    <h1>Hello World_</h1>
    <div class="row mt-5">
      <div class="col shadow-lg col-img rounded">
        <img
          src="https://i.postimg.cc/V6stdzRk/Selby-min.jpg"
          class="rounded img-selby img-fluid"
          alt=""
        />
      </div>
      <div class="col col-text">
        <h4 class="mb-2">About Me</h4>
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

        <h4 class="mt-3 mb-3 skills">Technical Skills</h4>
        <Table />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</div>
</template>

<script>
import Table from "../components/skillsTable.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Table,
    Footer,
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: black;
}

.about {
  font-family: "Abhaya Libre", serif;
  font-size: 1.1rem;
  height: 92vh;
  color: white;
}

h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}

h4 {
  font-family: "Cinzel", serif;
  font-weight: bold;
}

.col-text {
  text-align: center;
}

.col-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  text-align: justify;
}

.img-selby {
  height: 400px;
}

/* MEDIA QUERIES */

@media screen and (max-width: 1024px) {
  .col-img {
    align-items: flex-start;
    box-shadow: none !important;
  }

  .skills {
    margin-top: 0 !important;
  }
}

@media screen and (max-width: 912px) {
  .row {
    flex-direction: column;
  }

  .skills-list {
    flex-direction: row;
  }

  h4 {
    margin-top: 30px;
  }

  .about {
    margin-left: 0;
    margin-right: 0;
  }

  .shadow-lg {
    box-shadow: none !important;
  }

  .col {
    justify-content: left;
  }

  .col-text {
    text-align: left;
  }
}

@media screen and (max-width: 415px) {
  .col-img {
    display: none;
  }

  .row {
    margin-top: 0 !important;
  }

  .about {
    background-color: black;
    color: white;
  }

  .mt-3 {
    margin-top: 0 !important;
    padding-top: 40px;
  }

  h1 {
    color: #f9f871;
  }

  h4 {
    color: #ffc75f;
  }
}

@media screen and (max-width: 376px) {
  .mt-3,
  .mt-5 {
    margin-top: 0 !important ;
  }
}
</style>
