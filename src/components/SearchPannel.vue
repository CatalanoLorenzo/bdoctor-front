<script>
import StarFilter from "../components/StarFilter.vue";
import ReviewFilter from "./ReviewFilter.vue";
import SpecializationSelect from "./SpecializationSelect.vue";
import axios from "axios";
import { store } from "../store";
export default {
  name: "SearchPannel",
  components: {
    StarFilter,
    ReviewFilter,
    SpecializationSelect
  },
  data() {
    return {
      store
    };
  },
  methods: {
    filter(specialization, vote, review) {
      const url = store.api_url + store.api_profile;
      axios
        .get(url, {
          params: {
            specialization_id: specialization,
            vote: vote,
            review: review
          }
        })
        .then((response) => {
          //console.log(response);
          store.profiles = response.data.results;
          store.loading = false;
        })
        .catch((error) => {
          console.log(error);
          store.error = error.message;
        });
    },
    conditionSelecSpecialization() {
      if (this.selectedSpecialization == "all") {
        store.getProfiles(url_profiles);
      } else {
        this.filter(
          this.$refs.selectedSpecialization.selectedSpecialization,
          this.$refs.selectedVote.selectedVote,
          this.$refs.selectedReview.selectedReview
        );
      }
    }
  }
};
</script>
<template>
  <div class="container box">
    <!-- <div class="row">
      <div class="col">
        <nav class="menuOne">
          <ol>
            <li class="menu-itemTwo">
              <a href="#0" class="home">
                <i class="ion ion-md-home"></i>
                <span
                  ><SpecializationSelect
                    ref="selectedSpecialization"
                  ></SpecializationSelect>
                </span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#0" class="about">
                <i class="ion ion-ios-hand-outline"></i>
                <span><StarFilter ref="selectedVote"></StarFilter></span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#0" class="widgets">
                <i class="ion ion-ios-aperture-outline"></i>
                <span><ReviewFilter ref="selectedReview"></ReviewFilter></span>
                <div class="dots"></div>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <button
      @click="conditionSelecSpecialization()"
      type="button"
      class="btn btn-primary mt-3 mb-3"
    >
      search
    </button> -->
    <div class="row">
      <div class="col-sm-12">
        <div class="shadow-lg p-3">
          <SpecializationSelect
            ref="selectedSpecialization"
          ></SpecializationSelect>

          <StarFilter ref="selectedVote"></StarFilter>

          <ReviewFilter ref="selectedReview"></ReviewFilter>
        </div>

        <button
          @click="conditionSelecSpecialization()"
          type="button"
          class="btn btn-primary"
        >
          search
        </button>
      </div>
    </div>
  </div>
</template>
