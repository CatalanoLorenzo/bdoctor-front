<script>
import { store } from "../store";
import axios from "axios";
import ProfilesFiltered from "../components/ProfilesFiltered.vue";
export default {
  name: "AdvancedSearch",
  components: { ProfilesFiltered },
  data() {
    return {
      store,
      url_image: store.api_url + "storage/",
      selectedSpecialization: ""
    };
  },
  methods: {
    // API call select specialization
    selectSpecialization() {
      const specializationsUrl = store.api_url + store.api_profile;
      // + '?specialization_id=' + this.selectedSpecialization
      axios
        .get(specializationsUrl, {
          params: { specialization_id: this.selectedSpecialization }
        })
        .then((response) => {
          console.log(response);
          store.profiles = response.data.results;
          store.loading = false;
        })
        .catch((error) => {
          console.log(error);
          store.error = error.message;
        });
      console.log("prova");
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="mb-3 w-50">
          <label for="specializations" class="form-label fs-4 text-white"
            >Specializations</label
          >
          <select
            v-model="selectedSpecialization"
            class="form-select form-select-lg text-dark"
            name="specializations"
            id="specializations"
          >
            <option
              v-for="specialization in store.specializations"
              :value="specialization.id"
            >
              {{ specialization.name }}
            </option>
          </select>

          <button
            @click="selectSpecialization()"
            type="button"
            class="btn btn-primary"
          >
            search
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- card -->
  <!-- <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div v-for="profile in store.profiles" class="col my-3">
        <div class="doctor_card card h-100">
          <img
            class="card-img-top ratio-1x1 object-fit-cover"
            height="300"
            width="300"
            :src="url_image + profile.doctor_image"
            :alt="profile.slug"
          />
          <div class="card-body">
            <h4 class="card-title">
              {{ profile.user.name + " " + profile.user.surname }}
            </h4>
            <small>{{ profile.user.address }}</small
            ><br />
            <small>{{ profile.user.email }}</small>
            <p class="card-text">{{ profile.performances }}</p>
          </div>
          <div class="card-footer bg-primary">
            <h5 class="text-white">{{ profile.phone_number }}</h5>
          </div>
        </div>

      </div>
    </div>
  </div> -->

  <ProfilesFiltered></ProfilesFiltered>
</template>

<style lang="scss" scoped></style>
