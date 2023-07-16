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
    <div class="row row-cols-1 row-cols-md-2 g-2">
      <div class="col  p-3" v-for="profile in store.profiles">
        <div class="box shadow-lg p-3 h-100">
          <router-link class="text-decoration-none" :to="{ name: 'single-profile', params: { slug: profile.slug } }">
            <div class="row row-cols-2 row-cols-md-3 flex-nowrap">
              <div class="col p-0 img-container object-fit-cover  overflow-hidden d-flex justify-content-center">
                <img class="" :src="store.url_image + profile.doctor_image" :alt="profile.slug" />
              </div>
              <div class="col data-doc text-black">
                <p class="mb-0">{{ profile.user.name + " " + profile.user.surname }} <br></p>
                <p class="mb-0">Phone: <br> {{ profile.phone_number }}</p>
              </div>
              <div class="col info-box text-black d-flex flex-column flex-md-row ">
                <p class="mb-0 ">Address: {{ profile.user.address }} E-mail: {{ profile.user.email }}</p>
                <!-- <p class="mb-0 w-50">E-mail: {{ profile.user.email }}</p> -->
                <p class="mb-0">Performances:<p class="performances-show overflow-y-scroll mb-0">{{ profile.performances }}</p></p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>


  <!-- card -->
  <!--  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div v-for="profile in store.profiles" class="col my-3">
        <div class="doctor_card card h-100">
          <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }"
            class="text-decoration-none text-dark">
            <img class="card-img-top ratio-1x1 object-fit-cover" height="300" width="300"
              :src="store.url_image + profile.doctor_image" :alt="profile.slug" />
            <div class="card-body">
              <h4 class="card-title">
                {{ profile.user.name + " " + profile.user.surname }}
              </h4>
              <small>{{ profile.user.address }}</small><br />
              <small>{{ profile.user.email }}</small>
              <p class="card-text">{{ profile.performances }}</p>
            </div>
            <div class="card-footer bg-primary">
              <h5 class="text-white">{{ profile.phone_number }}</h5>
            </div>
          </router-link>
        </div>
         /card 
  </div>
  </div>
  </div> -->
</template>