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
  <section class="search-pannel">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 p-3 justify-content-between">
        <div class="col">
          <div class="d-flex flex-nowrap flex-column flex-md-row position-relative">
            <SpecializationSelect ref="selectedSpecialization"></SpecializationSelect>
            
            <button class="btn btn-primary  filter-button" data-bs-toggle="collapse" href="#colapsmenufilter" role="button"
              aria-expanded="false" aria-controls="colapsmenufilter">Filter
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#ffffff" class=""
                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
              </svg>
            </button>
            <div class="collapse position-absolute collapse-filter" id="colapsmenufilter">
              <div class="card card-body position-absolute z-2 ">
                <StarFilter ref="selectedVote"></StarFilter>
                <ReviewFilter ref="selectedReview"></ReviewFilter>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-end">
          <button @click="conditionSelecSpecialization()" type="button" class="btn btn-primary w-50">
            search
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
