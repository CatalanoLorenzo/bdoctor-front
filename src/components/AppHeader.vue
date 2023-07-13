<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <div class="flex-container header fixed-top">
    <div class="row">
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <div class="container">
          <div class="col-4">
            <a class="navbar-brand d-flex align-items-center" href="/">
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

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Right Side Of Navbar -->
              <ul class="navbar-nav ml-auto align-content-end gap-2">
                <!-- Authentication Links -->
                <a class="btn" href="http://127.0.0.1:8000/login" role="button"
                  >Login</a
                >
                <a
                  class="btn"
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
  <div class="elemento-successivo m-5"></div>
</template>
