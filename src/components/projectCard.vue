<template>
  <div class="cards mb-5">
    <div
      class="d-grid gap-4 card"
      v-for="(project, index) in projects"
      :key="project.id"
    >
      <!-- PROJECTS CARDS -->
      <div
        class="row projects bg-light btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="'#exampleModal' + (index + 1)"
      >
        <div class="d-flex gap-4 card-query">
          <img
            :src="project.imageURL"
            alt=""
            class="img-fluid projects_imgs rounded"
          />
          <div class="col">
            <h4 class="mt-5 mb-5">{{ project.title }}</h4>
            <p>
              {{ project.briefing }}
            </p>
            <div class="technologies d-flex mt-5 gap-3">
              <p>USED TECHNOLOGIES:</p>
              <p class="tech">{{ project.technologies[0] }}</p>
              <p class="tech">{{ project.technologies[1] }}</p>
              <p class="tech">{{ project.technologies[2] }}</p>
              <p class="tech">{{ project.technologies[3] }}</p>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          :id="'exampleModal' + (index + 1)"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ project.title }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <img :src="project.imageURL" alt="" class="img-fluid" />
                <div class="pt-4 pb-4">
                  <p>
                    {{ project.description }}
                  </p>
                </div>
                <div class="d-flex justify-content-around">
                  <a :href="project.liveURL" target="_blank"
                    ><button type="button" class="btn btn-success">
                      Live
                    </button></a
                  >
                  <a :href="project.github" target="_blank"
                    ><button type="button" class="btn btn-info">
                      GitHub
                    </button></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Mock Portfolio",
          imageURL: "https://i.postimg.cc/BnpvGHZG/mock-portfolio.png",
          briefing:
            "This project I was given to test my abilities to use basic HTML and CSS to build my first ever digital portfolio.",
          description:
            "This was the first attempt at making my profile using only HTML and CSS. I was given this project at Life Choices Academy and got an overall score of 76/100 and some feedback on where I needed to improve my developer skills. Below are links to the live portfolio and another is a link to GitHub",
          liveURL: "https://ephemeral-pegasus-115bcf.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/Mock-Portfolio",
          technologies: ["HTML", "CSS"],
          complete: true,
        },
        {
          id: 2,
          title: "Personal Portfolio",
          imageURL: "https://i.postimg.cc/L4L0XVcL/portfolio.png",
          briefing:
            "This is my personal professional portfolio I developed by myself. This was created by using a combination of HTML, CSS and Bootstrap.",
          description:
            "This is my personal professional portfolio I developed by myself while I was at Life Choices. This is the current website you are navigating and it was created or developed by using a combination of HTML, CSS and Bootstrap.",
          liveURL: "https://stirring-daffodil-11a73e.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/Selby_Portfolio",
          technologies: ["HTML", "CSS", "Bootstrap"],
          complete: true,
        },
        {
          id: 3,
          title: "Calculator",
          imageURL: "https://i.postimg.cc/HnmGxv3v/calculator.png",
          briefing:
            "In this project I used a combination of HTML, CSS and JavaScript to build a simple functioning online calculator.",
          description:
            "This is a side project of a simple calculator. I built this calculator using technologies like HTML, CSS for styling, Bootstrap and JavaScript for functionality. I am still working on this project.",
          liveURL: "https://darling-basbousa-55728e.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/My-calculator",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          complete: false,
        },
        {
          id: 4,
          title: "BMI Calculator",
          imageURL: "https://i.postimg.cc/D0wgBqzy/bmi-calc.png",
          briefing:
            "For this project I used a combination of HTML, CSS and JavaScript to build a Body Mass Index (BMI) calculator.",
          description:
            "This is a side project of a simple BMI calculator. I built this calculator using technologies like HTML, CSS for styling, Bootstrap and JavaScript for functionality. It calculates your BMI and also returns your BMI classification.",
          liveURL: "https://majestic-churros-43c61c.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/BMI-calculator",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          complete: true,
        },
        {
          id: 5,
          title: "Temperature Convertor",
          imageURL: "https://i.postimg.cc/tgmWpLRy/temp-convertor.png",
          briefing:
            "For this project I used a combination of HTML, CSS, Bootstrap and JavaScript to build a temperature convertor.",
          description:
            "This is a side project of a temperature convertor. I built this convertor using technologies like HTML, CSS and Bootstrap for styling and JavaScript for functionality. This is to basially convert temperature from Celcious to Ferenheight and vice versa.",
          liveURL: "https://splendorous-sherbet-ab47a7.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/temperature-convertor",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          complete: true,
        },
        {
          id: 6,
          title: "Propertiez Real Estate",
          imageURL: "https://i.postimg.cc/0QZc5jB3/properties.png",
          briefing:
            "This was a fake real estate agency website. The website is based on looking for houses/properties to buy or rent.",
          description:
            "This was a fake real estate agency website. The website is based on looking for houses/properties to buy or rent. The website has an admin page where an admin can add and delete properties.",
          liveURL: "https://strong-pavlova-8b37e9.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/Real-Estate",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          complete: false,
        },
        {
          id: 7,
          title: "Cole World",
          imageURL: "https://i.postimg.cc/s1d3Ljyw/coleworld.png",
          briefing:
            "This was a full stack project built with both Node.js and Vue.js. It is a frontend and backend web application",
          description:
            "This was a project for two members, one member of the pair was responsible for building the backend of the application and another for the frontend. I worked on the frontend of the project and my parter worked on the backend to build a REST API",
          liveURL: "https://coleworld.herokuapp.com/index.html",
          github: "https://github.com/RicardoRonan/ColeWorld2.0",
          technologies: ["Vue.js", "CSS", "Bootstrap", "Node.js"],
          complete: false,
        },
        {
          id: 8,
          title: "CAPSTONE Project",
          imageURL: "https://i.postimg.cc/mrkYs5kf/capstone.png",
          briefing:
            "This is the final project of the course. It's full stack project built with both Node.js and Vue.js. It is a frontend and backend web application",
          description:
            "We were tasked to build a full stack project for our final project of the course. I built an e-commerce store for people who enjoy movies to visit and purchase their favourite movies. Part of this project was to build a backend REST API for the store. This is the GitHub link for the API: https://github.com/Sabelo-Mdashe/CAPSTONE-backendAPI",
          liveURL: "https://sweet-yeot-54cead.netlify.app/",
          github: "https://github.com/Sabelo-Mdashe/CAPSTONE-frontend",
          technologies: ["Vue.js", "CSS", "Bootstrap", "Node.js"],
          complete: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
* {
  color: black;
}

p {
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
  text-transform: none;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.projects_imgs {
  width: 500px;
}

h4 {
  font-family: "Cinzel", serif;
  font-weight: bold;
}

.col {
  text-align: left;
}

/* MEDIA QUERTIES */

@media screen and (max-width: 1024px) {
  .card-query {
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .technologies {
    margin-top: 0 !important;
  }
}
</style>
