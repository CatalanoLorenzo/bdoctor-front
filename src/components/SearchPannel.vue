<script>
import StarFilter from "../components/StarFilter.vue";
import ReviewFilter from "./ReviewFilter.vue";
import SpecializationSelect from "./SpecializationSelect.vue"
import axios from "axios";
import { store } from "../store";
export default {
    name: 'SearchPannel',
    components: {
        StarFilter,
        ReviewFilter,
        SpecializationSelect
    },
    data() {
        return {
            store
        }
    },
    methods: {
        filter(specialization, vote, review) {
            const url = store.api_url + store.api_profile;
            axios
                .get(url, {
                    params: {
                        specialization_id: specialization,
                        vote: vote,
                        review: review,
                    },
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
            if (this.selectedSpecialization == 'all') {
                store.getProfiles(url_profiles)
            } else {
                this.filter(this.$refs.selectedSpecialization.selectedSpecialization, this.$refs.selectedVote.selectedVote, this.$refs.selectedReview.selectedReview
                )
            }
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div>
                    <!-- specilization filter -->
                    <SpecializationSelect ref="selectedSpecialization"></SpecializationSelect>
                    <!-- start filter  -->
                    <StarFilter ref="selectedVote"></StarFilter>
                    <!-- review filter -->
                    <ReviewFilter ref="selectedReview"></ReviewFilter>
                </div>
                <button @click="conditionSelecSpecialization()" type="button" class="btn btn-primary">search</button>
            </div>
        </div>
    </div>
</template>