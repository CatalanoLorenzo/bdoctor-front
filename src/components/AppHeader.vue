<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <div class="flex-container header fixed-top">
    <div class="row">
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <div
          class="container d-flex justify-content-center align-items-center p-4"
        >
          <div class="col-4">
            <a class="navbar-brand d-flex" href="/">
              <div class="logo_laravel navbar-expand-sm px-2 px-sm-0">
                <div class="fadeIn">
                  <img
                    class="w-25"
                    src="../assets/img/bdoctor__2_-removebg-previewPEPPE.png"
                    id="icon"
                    alt="User Icon"
                  />
                </div>
              </div>
            </a>
          </div>
          <!-- Left Side Of Navbar -->
          <div class="col-2">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse position-fixed"
              id="navbarSupportedContent"
            >
              <!-- Right Side Of Navbar -->
              <ul class="navbar-nav align-content-end">
                <!-- Authentication Links -->
                <a
                  class="btn btn-outline-primary btn-sm m-1"
                  href="http://127.0.0.1:8000/login"
                  role="button"
                  >Login</a
                >
                <a
                  class="btn btn-outline-primary btn-sm m-1"
                  href="http://127.0.0.1:8000/register"
                  role="button"
                  >Register</a
                >
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div class="elemento-successivo"></div>
</template>
