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
  <!-- card -->
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div v-for="profile in store.profiles" class="col my-3">
        <div class="doctor_card card h-100">
          <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }">
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
        <!-- /card -->
      </div>
    </div>
  </div>
</template>