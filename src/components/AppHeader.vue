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
  <header class="position-fixed z-3 w-100 bg-white">
    <div class="container mx-auto w-100 ">
      <div class="row">
        <nav class="navbar navbar-expand-lg bg-white ">
          <div class="container-fluid h-100 ">
            <a class="nav-link" href="http://localhost:5174/">
              <img class="logo img-fluid" src="../assets/img/logoBDoctor.png" id="icon" alt="User Icon" />
            </a>




            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>




            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 text-end ">
                <li class="nav-item ">
                  <a class="nav-link" href="http://127.0.0.1:8000/login">
                    <button class="btn btn-primary">Login</button>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="http://127.0.0.1:8000/register">
                    <button class="btn btn-primary">Register</button>
                  </a>
                </li>
              </ul>



            </div>
          </div>
        </nav>
      </div>
    </div>

  </header>
 
</template>

<style>
header{
  top: 0;

 }

</style>
