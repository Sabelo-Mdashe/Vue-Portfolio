<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col mt-5 img-col">
        <img
          src="https://i.postimg.cc/RFNd6CPT/Sabelo-2-min.jpg"
          class="w-50 rounded img-fluid"
          alt=""
        />
        <img src="../assets/Sabelo_mobile.png" class="mobile_img" alt="">
      </div>
      <div class="col mt-5 info-col">
        <h1>Sabelo Selby Mdashe_</h1>

<div class="typing-demo">
  <h4><span class="aspire">An</span> <span style="color: #7cba01;" class="aspire">Aspiring</span> Full-Stack Developer.</h4>
</div>

        <div class="mt-5 d-flex fields-info">
          <div class="fields field-labels gap-4">
            <span class="name4mobile">NAME:</span>
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
            <span class="name4mobile">Sabelo Selby Mdashe</span>
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
  background-color: black;
  /* background-image: url("https://i.pinimg.com/originals/a4/f1/95/a4f19586cb2ee8f3245bf72b9404346d.gif");
  background-size: cover; */
  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) ), url("https://wallpapersmug.com/download/3840x2400/2197f3/programming-code-colorful.jpg"); */
  min-height: 92vh;
  background-size: cover;
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
}

h1 {
  font-family: "Tapestry", cursive;
  text-align: left;
  font-size: 4rem;
}

.mobile_img {
   display: none;
}

.name4mobile {
  display: none;
}

h4 {
  font-family: "Cinzel", serif;
  color: #1ebad0;
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

.linkedin-icon, .github-icon {
  color: lightskyblue;
}

a > i,
.email-link {
  color: white;
  text-decoration: none;
  text-decoration-color: white;
}

.wrapper {
  /* height: 100vh; */
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 21ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
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

  .home,
  .row {
    min-height: 100vh;
  }

  h1 {
    display: none;
  }

  .fields-info {
    gap: 0;
  }

  .img-col {
    display: none;
  }

  .name4mobile {
    display: block;
  }
}

@media screen and (max-width: 376px) {
  .home {
    background-image: none;
    background-color: black;
  }
  .aspire {
    display: none;
  }

.icons > span > a > i {
  display: none;
}

  .typing-demo {
    width: 12ch;
  }

  .img-col {
    display: block;
  }

  .mobile_img {
   display: block;
   width: 50%;
   border-radius: 50%;
}

.info-col {
  margin-top: 0!important;
}

.name4mobile {
    display: block;
  }

.fields-info {
  margin-top: 0!important;
}
}
</style>
