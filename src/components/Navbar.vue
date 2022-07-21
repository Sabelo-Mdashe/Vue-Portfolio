<template>
  <div>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/resume">RESUME</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/testimonials">TESTIMONIALS</router-link>
      <router-link to="/contact">CONTACT</router-link>
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
</style>
