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
  <nav
    class="navbar navbar-expand-lg navbar-white bg-white custom-navbar fixed-top"
  >
    <div class="container">
      <img
        class="logo img-fluid"
        src="../assets/img/logoBDoctor.png"
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
.container .logo {
  transform: scale(3);
  margin-left: 4.5rem;
  height: 1rem;
}
.nav {
  height: 6rem;
}
</style>
