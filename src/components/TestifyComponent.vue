<template>
  <div class="container-fluid">
    <div
      id="carouselExampleCaptions"
      class="carousel slide mt-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div class="carousel-inner bg-dark">
        <div
          class="carousel-item mt-3"
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :class="{ active: index === 0 }"
        >
          <div class="carousel-caption d-md-block">
            <img :src="testimonial.imgURL" alt="" class="img-fluid" />
            <h5>{{ testimonial.name }}</h5>
            <p>{{ testimonial.title }}</p>
            <hr />
            <p>
              <i class="fa-solid fa-quote-left"></i> {{ testimonial.message }}
              <i class="fa-solid fa-quote-right"></i>
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="cards">
      <div
        class="card"
        style="width: 18rem"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <img :src="testimonial.imgURL" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{{ testimonial.name }}</h3>
          <h6>{{ testimonial.title }}</h6>
          <p class="card-text">
            {{ testimonial.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Godwin Dzvapatsva",
          title: "Lecturer",
          message:
            "Sabelo is interested and engaged in his lessons and always completes his projects on time. He has a gentle personality, which allows him to work with any of his classmates. Sabelo has proven to have a vital grasp of the HTML, CSS, and Bootstrap topics we have covered in class. Sabelo is such a smart student that he should continue to do well",
          imgURL: "https://i.postimg.cc/R0bv9Fkg/godwin-2.jpg",
        },
        {
          name: "Le-Andre Moritz",
          title: "Collegue",
          message:
            "Sabelo is a diligent worker, always stays focused and works hard. He has a good attention for detail and a keen eye for neat and professional design.",
          imgURL: "https://i.postimg.cc/wxCz23Yp/Lee.png",
        },
        {
          name: "Lunga Booi",
          title: "Collegue",
          message:
            "Sabelo is a good person to work with. He have passion on his work and like to explore new ideas. He is very intellectual. He can manage his time and work with new people.",
          imgURL: "https://i.postimg.cc/RhWLzG1N/LUNGA.png",
        },
        {
          name: "Ashton Abrahams",
          title: "Collegue",
          message:
            "Sabelo is a very skilled individual, he applies himself and excels in everything he does. A remarkable person with both personality and a valuable work ethic, a great asset to any team",
          imgURL: "https://i.postimg.cc/9Fz2tSfv/Ashton-4.jpg",
        },
        {
          name: "Siyolise Mekuto",
          title: "Collegue",
          message:
            "Sabelo is a respectful and focused person. He is always willing to help others and contributes a lot in group efforts.",
          imgURL: "https://i.postimg.cc/P5yrSZj7/siyolise.jpg",
        },
        {
          name: "Jason Wandrag",
          title: "Lecturer",
          message:
            "Sabelo shows a lot of promise as a developer. I love the effort he puts forth whenever he participates in the classroom. It's a pleasure watching him co-operate with his peers. He seems to learn quickly from the corrections made to his coding work, as long as he pays attention to them. I am excited about Sabelo's potential and I can't wait to see how he will grow in the future",
          imgURL: "https://i.postimg.cc/vT5BqD9L/jason.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container-fluid {
  font-family: "Abhaya Libre", serif;
  font-size: 1.1rem;
}

.carousel-inner {
  padding-top: 20px;
  padding-bottom: 0;
}

.carousel-item {
  height: 500px;
}

p {
  text-align: center;
}

.carousel-caption > img {
  height: 300px;
}

.carousel-caption {
  display: flex;
  justify-content: center;
  align-items: center;
}

i {
  color: blue;
}

.cards {
  display: none;
}

/* MEDIA QUERIES */

@media screen and (max-width: 415px) {
  .cards {
    display: block;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
  }

  #carouselExampleCaptions {
    display: none;
  }
}
</style>
