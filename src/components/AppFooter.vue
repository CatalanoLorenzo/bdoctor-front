<script>
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
  name: "AppFooter",
  components: { FooterTop, FooterBottom }
};
</script>

<template>
  <footer class="appFooter mt-5">
    <div class="test d-flex justify-content-end align-items-end">
      <div class="footer position-relative w-100 d-flex justify-content-center align-content-center flex-column">
        <div class="waves">
          <div class="wave position-absolute w-100 z-3" id="wave1"></div>
          <div class="wave position-absolute w-100 z-3" id="wave2"></div>
          <div class="wave position-absolute w-100 z-3" id="wave3"></div>
          <div class="wave position-absolute w-100 z-3" id="wave4"></div>
        </div>
      </div>
    </div>
    <FooterTop></FooterTop>
    <FooterBottom></FooterBottom>
  </footer>
</template>
