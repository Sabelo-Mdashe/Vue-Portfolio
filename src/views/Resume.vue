<template>
  <div class="container-fluid pt-3 pb-3">
  <div class="resume container">
    <h1>Resume_</h1>

    <div class="row mt-5">
                <div class="col-md-12">
                    <div class="main-timeline4">
                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="year"><i style="color:#f54957" class="fa-solid fa-briefcase"></i></span>
                                <div class="inner-content">
                                    <h3 class="title"> LC Studios</h3>
                                    <p>09/2022 - Current</p>
                                    <p class="description">
                                      <span style="color:#f54957">Intern</span> <br>
                                        <span>Duties: Designing and developing Websites, 
                                          Designing and developing Web Applications, 
                                          Coding / Programming, 
                                          Presentations, 
                                        Upskilling</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="year"><i style="color:#1ebad0" class="fa-solid fa-code"></i></span>
                                <div class="inner-content">
                                    <h3 class="title"> Life Choices Coding Academy</h3>
                                    <p>03/2022 - 09/2022</p>
                                    <p class="description">
                                      <span style="color:#1ebad0">Student</span> <br>
                                        <span>Responsibilities: Designing and developing Websites, 
                                          Designing and developing Web Applications, 
                                          Coding / Programming, 
                                          Presentations</span> <br>
                                          <a href="https://drive.google.com/file/d/1K7YODyah_fLuGvOybY5-phWvw6V_2gmv/view?usp=sharing" target="_blank">
                                          <button class="rounded-pill p-1 button-cv" style="background-color:#54d1e3">Download CV</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="year"><i style="color:#7cba01" class="fa-solid fa-briefcase"></i></span>
                                <div class="inner-content">
                                    <h3 class="title">Younglings Africa (Absa)</h3>
                                    <p>09/2020 - 03/2021</p>
                                    <p class="description">
                                      <span style="color:#7cba01">Intern</span> <br>
                                      <span>Duties: Designing and developing Websites, 
                                        Coding / Programming, 
                                        Presentations, 
                                        Problem Solving</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="year"><i style="color:#f8781f" class="fa-solid fa-code"></i></span>
                                <div class="inner-content">
                                    <h3 class="title">CapaCiTi - Cape Innovation & Technology Initiative</h3>
                                    <p>03/2020 - 08/2020</p>
                                    <p class="description">
                                      <span style="color:#f8781f">Student</span> <br>
                                      <span>Responsibilities: Designing and developing websites, 
                                        Application development, 
                                        Coding / Programming, 
                                        Presentations, 
                                        Problem solving</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="timeline-content">
                                <span class="year"><i style="color:#f54957" class="fa-solid fa-user-graduate"></i></span>
                                <div class="inner-content">
                                    <h3 class="title">Collage of Cape Town</h3>
                                    <p>2017 -  2019</p>
                                    <p class="description">
                                      <span style="color:#f54957">National Certificate (Vocational) Computer Sciences/I.T</span> <br>
                                      <span>Subjects: Computer Programming, 
                                        Systems Analysis & Design, 
                                        Data Communications & Networking, 
                                        Office Data Processing, 
                                        English First Additional Language, 
                                        Mathematical Literacy, 
                                        Life Orientation Skills / Computer Skills</span> <br>
                                        <a href="https://drive.google.com/file/d/1TJf8sCe2wohy9cGOM-FvytlTG3PRmrvw/view?usp=sharing" target="_blank">
                                          <button class="rounded-pill p-1 button-certificate" style="background-color:#f0868f">Download Certificate</button>
                                        </a>
                                    </p>
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
export default {};
</script>
<style scoped>
.container-fluid {
  background-color: black;
  /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1) ), url("https://wallpapersmug.com/download/3840x2400/2197f3/programming-code-colorful.jpg");
background-size: cover; */
}

.button-cv:hover {
  background-color: black!important;
  color: #1ebad0;
}

.button-certificate:hover {
  background-color: black!important;
  color: #f54957;
}

.main-timeline4{overflow:hidden;position:relative}
.main-timeline4:before{content:"";width:5px;height:90%;background:#333;position:absolute;top:70px;left:50%;transform:translateX(-50%)}
.main-timeline4 .timeline-content:before,.main-timeline4 .timeline:before{top:50%;transform:translateY(-50%);content:""}
.main-timeline4 .timeline{width:50%;padding-left:100px;float:right;position:relative}
.main-timeline4 .timeline:before{width:20px;height:20px;border-radius:50%;background:#fff;border:5px solid #333;position:absolute;left:-10px}
.main-timeline4 .timeline-content{display:block;padding-left:150px;position:relative}
.main-timeline4 .timeline-content:before{width:90px;height:10px;border-top:7px dotted #333;position:absolute;left:-92px}
.main-timeline4 .year{display:inline-block;width:120px;height:120px;line-height:100px;border-radius:50%;border:10px solid #f54957;font-size:30px;color:#f54957;text-align:center;box-shadow:inset 0 0 10px rgba(0,0,0,.4);position:absolute;top:0;left:0}
.main-timeline4 .year:before{content:"";border-left:20px solid #f54957;border-top:10px solid transparent;border-bottom:10px solid transparent;position:absolute;bottom:-13px;right:0;transform:rotate(45deg)}
.main-timeline4 .inner-content{padding:20px 0}
.main-timeline4 .title{font-size:24px;font-weight:600;color:#f54957;text-transform:uppercase;margin:0 0 5px}
.main-timeline4 .description{font-size:14px;color:#6f6f6f;margin:0 0 5px}
.main-timeline4 .timeline:nth-child(2n){padding:0 100px 0 0}
.main-timeline4 .timeline:nth-child(2n) .timeline-content:before,.main-timeline4 .timeline:nth-child(2n) .year,.main-timeline4 .timeline:nth-child(2n):before{left:auto;right:-10px}
.main-timeline4 .timeline:nth-child(2n) .timeline-content{padding:0 150px 0 0}
.main-timeline4 .timeline:nth-child(2n) .timeline-content:before{right:-92px}
.main-timeline4 .timeline:nth-child(2n) .year{right:0}
.main-timeline4 .timeline:nth-child(2n) .year:before{right:auto;left:0;border-left:none;border-right:20px solid #f54957;transform:rotate(-45deg)}
.main-timeline4 .timeline:nth-child(2){margin-top:110px}
.main-timeline4 .timeline:nth-child(odd){margin:-110px 0 0}
.main-timeline4 .timeline:nth-child(even){margin-bottom:80px}
.main-timeline4 .timeline:first-child,.main-timeline4 .timeline:last-child:nth-child(even){margin:0}
.main-timeline4 .timeline:nth-child(2n) .year{border-color:#1ebad0;color:#1ebad0}
.main-timeline4 .timeline:nth-child(2) .year:before{border-right-color:#1ebad0}
.main-timeline4 .timeline:nth-child(2n) .title{color:#1ebad0}
.main-timeline4 .timeline:nth-child(3n) .year{border-color:#7cba01;color:#7cba01}
.main-timeline4 .timeline:nth-child(3) .year:before{border-left-color:#7cba01}
.main-timeline4 .timeline:nth-child(3n) .title{color:#7cba01}
.main-timeline4 .timeline:nth-child(4n) .year{border-color:#f8781f;color:#f8781f}
.main-timeline4 .timeline:nth-child(4) .year:before{border-right-color:#f8781f}
.main-timeline4 .timeline:nth-child(4n) .title{color:#f8781f}
/* .main-timeline4 .timeline:nth-child(5n) .year{border-color:#9f005d;color:#9f005d}
.main-timeline4 .timeline:nth-child(5) .year:before{border-right-color:#9f005d}
.main-timeline4 .timeline:nth-child(5n) .title{color: #9f005d} */
@media only screen and (max-width:1200px){.main-timeline4 .year{top:50%;transform:translateY(-50%)}
}
@media only screen and (max-width:990px){.main-timeline4 .timeline{padding-left:75px}
.main-timeline4 .timeline:nth-child(2n){padding:0 75px 0 0}
.main-timeline4 .timeline-content{padding-left:130px}
.main-timeline4 .timeline:nth-child(2n) .timeline-content{padding:0 130px 0 0}
.main-timeline4 .timeline-content:before{width:68px;left:-68px}
.main-timeline4 .timeline:nth-child(2n) .timeline-content:before{right:-68px}
}
@media only screen and (max-width:767px){.main-timeline4{overflow:visible}
.main-timeline4:before{height:100%;top:0;left:0;transform:translateX(0)}
.main-timeline4 .timeline:before,.main-timeline4 .timeline:nth-child(2n):before{top:60px;left:-9px;transform:translateX(0)}
.main-timeline4 .timeline,.main-timeline4 .timeline:nth-child(even),.main-timeline4 .timeline:nth-child(odd){width:100%;float:none;text-align:center;padding:0;margin:0 0 10px}
.main-timeline4 .timeline-content,.main-timeline4 .timeline:nth-child(2n) .timeline-content{padding:0}
.main-timeline4 .timeline-content:before,.main-timeline4 .timeline:nth-child(2n) .timeline-content:before{display:none}
.main-timeline4 .timeline:nth-child(2n) .year,.main-timeline4 .year{position:relative;transform:translateY(0)}
.main-timeline4 .timeline:nth-child(2n) .year:before,.main-timeline4 .year:before{border:none;border-right:20px solid #f54957;border-top:10px solid transparent;border-bottom:10px solid transparent;top:50%;left:-23px;bottom:auto;right:auto;transform:rotate(0)}
.main-timeline4 .timeline:nth-child(2n) .year:before{border-right-color:#1ebad0}
.main-timeline4 .timeline:nth-child(3n) .year:before{border-right-color:#7cba01}
.main-timeline4 .timeline:nth-child(4n) .year:before{border-right-color:#f8781f}
/* .main-timeline4 .timeline:nth-child(5n) .year:before{border-right-color:#9f005d} */

.main-timeline4 .inner-content{padding:10px}
}

h1 {
  text-align: center;
  font-family: "Cinzel", serif;
}
.resume {
  font-family: "Abhaya Libre", serif;
  font-size: 1.2rem;
  color: white;
  min-height: 92vh;
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

/* MEDIA QUERIES */

@media screen and (max-width: 415px) {
  .row {
    margin-top: 0 !important;
    display: block;
  }

  .resume {
    background-color: black !important;
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

  .heading {
    text-align: left;
    margin-top: 40px;
  }
}

/* @media screen and (max-width: 376px) {
  .btn-dark {
    padding: 0.625rem 1.5rem 0.5rems;
  }
} */
</style>
