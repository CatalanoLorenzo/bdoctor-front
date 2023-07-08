<script>
import StarFilter from "../components/StarFilter.vue";
import ReviewFilter from "./ReviewFilter.vue";
import axios from "axios";
import { store } from "../store";
export default {
    name: 'SearchPannel',
    components: {
        StarFilter,
        ReviewFilter,
    },
    data() {
        return {
            selectedVote: '',
            selectedReview: "",
            store
        }
    },
    methods: {
        accessChildValue(varchild, varsdad) {
            console.log('star f')
            varsdad = this.$refs.varchild.varchild;
            console.log(this.$refs.varchild.varchild); // Stampa il valore del componente figlio
        },
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
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-3 w-50">
                    <label for="specializations" class="form-label fs-4">Specializations</label>
                    <select v-model="selectedSpecialization" class="form-select form-select-lg text-dark"
                        name="specializations" id="specializations">
                        <option value="all">All</option>
                        <option v-for="specialization in store.specializations" :value="specialization.id">
                            {{ specialization.name }}
                        </option>
                    </select>
                </div>
                <!-- start filter  -->
                <StarFilter ref="selectedVote" @change="accessChildValue(selectedVote, this.selectedVote)"></StarFilter>
                <!-- review filter -->
                <ReviewFilter ref="selectedReview" @change="accessChildValue(selectedReview, this.selectedReview)"></ReviewFilter>
                <button @click="
                    this.selectedSpecialization == 'all'
                        ? store.getProfiles(url_profiles)
                        : filter(
                            this.selectedSpecialization,
                            this.selectedVote,
                            this.selectedReview
                        )
                    " type="button" class="btn btn-primary">
                    search
                </button>
            </div>
        </div>
    </div>
</template>