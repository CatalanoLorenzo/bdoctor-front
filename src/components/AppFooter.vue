<script>
import FooterTop from "./FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";
export default {
  name: "AppFooter",
  components: { FooterTop, FooterBottom }
};
</script>

<template>
  <footer class="appFooter">
    <div class="test">
      <div class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
      </div>
    </div>
    <FooterTop></FooterTop>
    <FooterBottom></FooterBottom>
  </footer>
</template>
