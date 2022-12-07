<template>
  <div>
    <section class="text-center">
      <div class="row d-flex skills-list">
        <div class="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
          <i class="fa-brands fa-html5 fs-1 html-icon"></i>
          <h6 class="fw-normal mb-0">HTML</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-md-block"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mb-md-5 mb-lg-0 position-relative">
          <i class="fa-brands fa-css3 fs-1"></i>

          <h6 class="fw-normal mb-0">CSS</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-lg-block"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
          <i class="fa-brands fa-js-square fs-1 js-icon"></i>

          <h6 class="fw-normal mb-0">JavaScript</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-md-block"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mb-md-0 position-relative">
          <i class="fa-brands fa-bootstrap fs-1 bootstrap-icon"></i>

          <h6 class="fw-normal mb-0">Bootstrap</h6>
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-git-alt fs-1 git-icon"></i>

          <h6 class="fw-normal mb-0">Git</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-md-block"
          />
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-github fs-1 github-icon"></i>

          <h6 class="fw-normal mb-0">GitHub</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-md-block"
          />
        </div>
        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-vuejs fs-1 vue-icon"></i>

          <h6 class="fw-normal mb-0">Vue.js</h6>
          <hr
            class="divider-vertical-blurry position-absolute my-0 h-100 d-none d-md-block"
          />
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-solid fa-database fs-1 database-icon"></i>

          <h6 class="fw-normal mb-0">MySQL</h6>
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-node-js fs-1 node-icon"></i>

          <h6 class="fw-normal mb-0">Node.js</h6>
        </div>

        <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-wordpress fs-1 wordpress-icon"></i>

          <h6 class="fw-normal mb-0">Wordpress</h6>
        </div>

        <!-- <div class="col-lg-3 col-md-6 mb-5 mt-4 mb-md-0 position-relative">
          <i class="fa-brands fa-aws fs-1"></i>

          <h6 class="fw-normal mb-0">AWS</h6>
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style>
i {
  color: blue;
}

.html-icon:hover {
  color: orangered;
}

.js-icon:hover,
.fa-aws:hover {
  color: orange;
}

.bootstrap-icon:hover {
  color: blueviolet;
}

.git-icon:hover {
  color: #f1502f;
}

.github-icon:hover,
.database-icon:hover,
.wordpress-icon:hover {
  color: white;
}

.vue-icon:hover {
  color: #428f68;
}

.node-icon:hover {
  color: green;
}
/* MEDIA QUERIES */

@media screen and (max-width: 415px) {
  .skills-list {
    flex-direction: row !important;
    gap: 10px;
  }

  .mt-4 {
    margin-top: 0 !important;
  }

  .position-relative {
    width: auto;
  }

  .github-icon:hover,
  .database-icon:hover {
    color: white;
  }
}
</style>
