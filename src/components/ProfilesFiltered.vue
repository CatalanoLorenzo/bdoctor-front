<script>
import { store } from "../store";
export default {
  props: {
    idSpecialization: String
  },
  data() {
    return {
      store,
    };
  }
};
</script>
<template>
  <div class="container">
    <div class="row ">
      <div class="col-12 col-md-6 box-doctor rounded-5" v-for="profile in store.profiles " >
        <router-link class="text-decoration-none h-100" :to="{ name: 'single-profile', params: { slug: profile.slug } }">
          <div class="row shadow-lg px-5 pt-3 w-100 h-100">

            <div class="col-6 px-0 img-container object-fit-cover  overflow-hidden d-flex justify-content-center rounded-circle">
              <img class="img-fluid" :src="store.url_image + profile.doctor_image" :alt="profile.slug" />
            </div>
            <div class="col-6  ">
              <p class="mb-0 display-6">{{ profile.user.name + " " + profile.user.surname }} <br></p>
              <p class="mb-0">Phone: <br> {{ profile.phone_number }}</p>

            </div>
            <div class="col-12  info-box text-black d-flex flex-column flex-md-row overflow-y-scroll">
              <p class="mb-0 ">Address: {{ profile.user.address }} E-mail: {{ profile.user.email }} performance : {{
                profile.performances }}</p>

            </div>

          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.box-doctor{
  height: 50vh;
}
.img-container {
 max-height: 150px;
 max-width: 150px  !important;

}
</style>