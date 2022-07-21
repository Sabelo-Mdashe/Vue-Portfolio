<template>
  <div>
    <section class="text-center">
      <div class="row">
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
      </div>
    </section>
    <!-- <table class="table table-hover">
      <tr>
        <td>
          <i class="fa-brands fa-html5 fs-1 html-icon"></i>
        </td>
        <td>
          <i class="fa-brands fa-css3 fs-1"></i>
        </td>

        <td>
          <i class="fa-brands fa-js-square fs-1 js-icon"></i>
        </td>
      </tr>

      <tr>
        <td>
          <i class="fa-brands fa-bootstrap fs-1 bootstrap-icon"></i>
        </td>

        <td>
          <i class="fa-brands fa-git-alt fs-1 git-icon"></i>
        </td>
        <td>
          <i class="fa-brands fa-github fs-1 github-icon"></i>
        </td>
      </tr>
      <tr>
        <td>
          <i class="fa-brands fa-vuejs fs-1 vue-icon"></i>
        </td>
        <td>
          <i class="fa-solid fa-database fs-1"></i>
        </td>
      </tr>
    </table> -->
  </div>
</template>
<script>
export default {};
</script>
<style>
table {
  /* width: 100%; */
  text-align: center;
}

i {
  color: blue;
}

.html-icon:hover {
  color: orangered;
}

.js-icon:hover {
  color: orange;
}

.bootstrap-icon:hover {
  color: blueviolet;
}

.git-icon:hover {
  color: #f1502f;
}

.github-icon:hover,
.database-icon:hover {
  color: black;
}

.vue-icon:hover {
  color: #428f68;
}
</style>
