<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col mt-5 img-col">
        <img
          src="https://i.postimg.cc/BnTmZZR3/Sabelo.png"
          class="w-50 rounded img-fluid"
          alt=""
        />
      </div>
      <div class="col mt-5 info-col">
        <h1>Sabelo Selby Mdashe_</h1>
        <h4>An Aspirant Full-Stack Developer</h4>

        <div class="mt-5 d-flex fields-info">
          <div class="fields field-labels gap-4">
            <span>AGE:</span>
            <span>PHONE:</span>
            <span>EMAIL:</span>
            <span>ADDRESS:</span>
            <div class="icons d-flex gap-5">
              <span>
                <a href="https://github.com/Sabelo-Mdashe" target="_blank"
                  ><i class="fa-brands fa-github fs-2 github-icon"></i
                ></a>
              </span>

              <span>
                <a
                  href="https://www.linkedin.com/in/sabelo-mdashe/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin fs-2 linkedin-icon"></i>
                </a>
              </span>
            </div>
          </div>
          <div class="fields gap-4">
            <span>24</span>
            <span>081 360 3885</span>
            <span
              ><a href="mailto:selbysabelomdashe@gmail.com" class="email-link">
                selbysabelomdashe@gmail.com
              </a>
            </span>
            <span>5958 Dr Ervin Toms Crossroads 7750</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.home {
  background-image: url("https://i.pinimg.com/originals/a4/f1/95/a4f19586cb2ee8f3245bf72b9404346d.gif");
  background-size: cover;
  height: 92vh;
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
}

h1 {
  font-family: "Tapestry", cursive;
  text-align: left;
  font-size: 4rem;
}

h4 {
  font-family: "Cinzel", serif;
}
.info-col {
  color: white;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

.fields {
  display: flex;
  flex-direction: column;
}

.fields-info {
  gap: 150px;
}

.field-labels {
  font-weight: bold;
}
.github-icon:hover,
.linkedin-icon:hover,
.email-link:hover {
  color: blue;
}

.img-col {
  display: flex;
  justify-content: center;
}

a > i,
.email-link {
  color: white;
  text-decoration: none;
  text-decoration-color: white;
}

/* MEDIA QUERIES */

/* @media screen and (max-width: 1024px) {
  .img-fluid {
    height: 400px;
  }

  .home {
    height: fit-content; */
/* min-height: fit-content !important; */
/* }
} */

/* @media screen and (max-width: 912px) {
  .row {
    flex-direction: column;
    height: 100vh;
  }

  .img-fluid {
    height: auto;
  }

  .img-col {
    justify-content: left;
  }

  .home {
    font-size: 1.4rem;
  }
}

  */
@media screen and (max-width: 415px) {
  .img-fluid {
    display: none;
  }

  .fields-info {
    gap: 0;
  }

  .img-col {
    display: none;
  }
}
</style>
