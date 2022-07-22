<template>
  <div class="resume container bg-light">
    <h1 class="mt-3">Resume_</h1>

    <div class="row mt-5">
      <div class="col">
        <div class="heading">
          <h4 class="border-bottom">Work Experience</h4>
        </div>
        <div class="lc">
          <a href="https://www.lifechoices.co.za/" target="_blank"
            >Life Choices Academy</a
          >

          <p>Intern</p>
          <p class="period">03/2022 - Current</p>
          <p class="location">Lansdowne, Cape Town</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Designing and developing Websites</li>
            <li>Designing and developing Web Applications</li>
            <li>Coding / Programming</li>
            <li>Presentations</li>
          </ul>
        </div>
        <div class="younglings mt-5">
          <a href="https://www.younglings.capetown/" target="_blank"
            >Younglings Africa (ABSA)</a
          >

          <p>Intern</p>
          <p class="period">09/2020 - 03/2021</p>
          <p class="location">Long Street, Cape Town</p>
          <p>Responsibilities:</p>
          <ul>
            <li>Designing and developing Websites</li>
            <li>Coding / Programming</li>
            <li>Presentations</li>
            <li>Problem Solving</li>
          </ul>
        </div>
        <div class="capaciti mt-5">
          <a href="https://www.citi.org.za/" target="_blank"
            >CapaCiTi - Cape Innovation & Technology Initiative</a
          >

          <p>Intern</p>
          <p class="period">03/2020 - 08/2020</p>
          <p class="location">Woodstock Exchange</p>
          <p>Resposibilities:</p>
          <ul>
            <li>Designing and developing websites</li>
            <li>Application development</li>
            <li>Coding / Programming</li>
            <li>Presentations</li>
            <li>Problem solving</li>
          </ul>
          <!-- <a href="../assets/Documents/cv.pdf" download>
            <button type="button" class="btn btn-dark rounded-pill mb-3 mt-3">
              DOWNLOAD CV
            </button>
          </a> -->
        </div>
      </div>
      <div class="col">
        <div class="heading">
          <h4 class="border-bottom">Education</h4>
        </div>
        <div>
          <span class="coct">Collage of Cape Town</span>
          <p>National Certificate (Vocational) Computer Sciences/I.T</p>
          <p class="period">01/2017 - 12/2019</p>
          <p class="location">Crawford Campus</p>
          <p>Subjects:</p>
          <ul>
            <li>Computer Programming</li>
            <li>Systems Analysis & Design</li>
            <li>Data Communications & Networking</li>
            <li>Office Data Processing</li>
            <li>English First Additional Language</li>
            <li>Mathematical Literacy</li>
            <li>Life Orientation Skills / Computer Skills</li>
          </ul>
          <!-- <a href="../assets/Documents/S MDASHE MATRIC.pdf" download>
            <button type="button" class="btn btn-dark rounded-pill mb-3 mt-3">
              DOWNLOAD CERTIFICATE
            </button>
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}
.resume {
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
}

.location {
  text-align: right;
  color: blue;
}

.coct {
  color: blue;
}

h4 {
  font-family: "Cinzel", serif;
  font-weight: bold;
}

.lc a,
.younglings a,
.capaciti a {
  text-decoration: none;
}

button:hover {
  background-color: white;
  color: black;
}

.heading {
  text-align: center;
}
</style>
