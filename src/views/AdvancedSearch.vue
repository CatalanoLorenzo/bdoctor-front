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
      url_profiles: store.api_url + store.api_profile,
      selectedSpecialization: "",
      selectedVote: "",
      selectedReview: "",
    };
  },
  methods: {
    filter(specialization, vote, review) {
      const url = store.api_url + store.api_profile;
      // + '?specialization_id=' + this.selectedSpecialization
      console.log(vote);
      axios
        .get(url, {
          params: {
            specialization_id: specialization,
            vote: vote,
            review: review,
          },
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
    },
  },

  mounted() {
    // call api specializations mounted
    console.log(this.url_profiles);
    this.selectedSpecialization = this.$route.query.specializationSelect;
    const url_specializations = store.api_url + store.api_specializations;
    this.store.getSpecializations(url_specializations);
    this.store.selectSpecialization(this.$route.query.specializationSelect);
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="mb-3 w-50">
          <label for="specializations" class="form-label fs-4"
            >Specializations</label
          >
          <select
            v-model="selectedSpecialization"
            class="form-select form-select-lg text-dark"
            name="specializations"
            id="specializations"
          >
            <option value="all">All</option>
            <option
              v-for="specialization in store.specializations"
              :value="specialization.id"
            >
              {{ specialization.name }}
            </option>
          </select>
        </div>
        <!-- start filter  -->
        <div class="mb-3 w-50">
          <label for="vote" class="form-label fs-4">Filter by vote</label>
          <select
            v-model="selectedVote"
            class="form-select form-select-lg text-dark"
            name="vote"
            id="vote"
          >
            <option value="all">All</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <!-- review filter -->
        <div class="mb-3 w-50">
          <label for="review" class="form-label fs-4">Filter by review</label>
          <select
            v-model="selectedReview"
            class="form-select form-select-lg text-dark"
            name="review"
            id="review"
          >
            <option value="all">All</option>
            <option value="1">-2 </option>
            <option value="2">tra 2 e 5</option>
            <option value="3">5+</option>
          </select>
        </div>

        <button
          @click="
            this.selectedSpecialization == 'all'
              ? store.getProfiles(url_profiles)
              : filter(
                  this.selectedSpecialization,
                  this.selectedVote,
                  this.selectedReview
                )
          "
          type="button"
          class="btn btn-primary"
        >
          search
        </button>
      </div>
    </div>
  </div>

  <ProfilesFiltered
    :idSpecialization="$route.query.specializationSelect"
  ></ProfilesFiltered>
</template>

<style lang="scss" scoped></style>
