<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <div class="container">
      <img
        class="w-25"
        src="../assets/img/bdoctor__2_-removebg-previewPEPPE.png"
        id="icon"
        alt="User Icon"
      />
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:8000/login">
              <button class="btn btn-primary">Login</button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:8000/register">
              <button class="btn btn-primary">Register</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.container img {
  transform: scale(2);
}

/* .container {
  height: 120px;
} */
</style>
