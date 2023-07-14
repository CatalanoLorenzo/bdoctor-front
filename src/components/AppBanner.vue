<script>
export default {


  name: "AppBanner",


  data() {
    return {};
  }
};
</script>
<template>
  <div class="container banner_doc rounded rounded-4 mt-5">
    <div class="banner row">
      <div class="col-12 col-md-6 banner_image p-3">
        <img class="img-fluid rounded rounded-4" src="../../public/img/bdcotors-image-info.jpg" alt="img_info">
      </div>
      <div class="col-12 col-md-6 banner_info p-3 d-flex flex-column justify-content-around">
        <h3 class="text-light">Are you a health professional? Start reaching new patients!</h3>
        <ul>
          <li>Reach patients looking for a specialist.</li>
          <li class="my-3">Allow your patients to book 24/7. Wait until opening hours? No longer needed!</li>
          <li>Boost your online reputation by getting reviews</li>
        </ul>
        <a class="btn w-25 align-self-center align-self-md-start" href="http://127.0.0.1:8000/register"
          role="button">Register</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
