<template>
  <div>
    <!-- MOBILE VIEW NAVBAR -->
    <nav class="fixed-top">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">SELBY</h5>
          <span class="text-muted">Aspirant Full-Stack Developer</span>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume">RESUME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects">PROJECTS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/testimonials">TESTIMONIALS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">CONTACT</router-link>
            </li>
          </ul>
        </div>
      </div>
      <nav class="navbar navbar-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
        </div>
      </nav>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
@media screen and (max-width: 376px) {
  .fixed-top {
    display: block;
    position: relative;
  }

  .desktop-navbar {
    display: none;
  }

  .navbar-dark {
    background-color: transparent;
  }

  .navbar-toggler-icon {
    color: blue;
  }
}
</style>
