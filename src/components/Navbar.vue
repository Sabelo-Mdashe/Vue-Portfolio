<template>
  <div>
    <!-- DESKTOP VIEW NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light desktop-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SELBY</a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
nav {
  padding: 30px;
  text-align: center;
  font-family: "Abhaya Libre", serif;
  font-size: large;
  width: 100%;
}

.fixed-top {
  display: none;
}

#navbarNav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 30px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #4842b9;
  font-size: small;
}

@media screen and (max-width: 912px) {
  .navbar {
    overflow: hidden;
  }
}
</style>
