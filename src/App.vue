<template>
  <Navbar />
  <MobileNav />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MobileNav from "./components/mobileNav.vue";

export default {
  components: {
    Navbar,
    MobileNav,
    MobileNav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}


</style>
