<template>
  <div class="mt-4 d-flex footer container">
    <span>
      <a href="https://github.com/Sabelo-Mdashe" target="_blank"
        ><i class="fa-brands fa-github fs-2 github-icon"></i
      ></a>
    </span>
    <span>
      <a href="https://www.linkedin.com/in/sabelo-mdashe/" target="_blank">
        <i class="fa-brands fa-linkedin fs-2 linkedin-icon"></i>
      </a>
    </span>
    <span>
      <a href="mailto:selbysabelomdashe@gmail.com" target="_blank">
        <i class="fa-solid fa-at fs-2"></i>
      </a>
    </span>
    <span>
      <a href="https://wa.me/+27813603885" target="_blank">
        <i class="fa-brands fa-whatsapp-square fs-2"></i>
      </a>
    </span>
    <span>
      <a
        href="https://www.facebook.com/profile.php?id=100008415544700"
        target="_blank"
      >
        <i class="fa-brands fa-facebook fs-2"></i>
      </a>
    </span>
    <span>
      <a target="_blank"> <i class="fa-solid fa-copyright"></i> </a>2022
    </span>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.fa-whatsapp-square:hover {
  color: green;
}

.footer {
  justify-content: space-around;
  align-items: center;
}
</style>
