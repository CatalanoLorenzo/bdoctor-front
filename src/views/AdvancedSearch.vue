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
        // API call Specializations
        getSpecializations(url) {
            axios.get(url).then(response => {
                //console.log(response);
                store.specializations = response.data.results;
                store.loading = false;
            }).catch(error => {
                console.log(error);
                store.error = error.message
            })
        },
        // API call select specialization
        /**
         * 
         * @param {String} param 
         */
        selectSpecialization(param) {
            const specializationsUrl = store.api_url + store.api_profile;
            // + '?specialization_id=' + this.selectedSpecialization
            axios
                .get(specializationsUrl, {
                    params: { specialization_id: param }
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
            console.log(this.selectedSpecialization);
            console.log(this.$route.query.specializationSelect);
        },

    }, mounted() {
        // call api specializations mounted
        this.selectedSpecialization = this.$route.query.specializationSelect;
        const url_specializations = store.api_url + store.api_specializations
        this.getSpecializations(url_specializations);
        this.selectSpecialization(this.$route.query.specializationSelect)
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-3 w-50">
                    <label for="specializations" class="form-label fs-4 text-white">Specializations</label>
                    <select v-model="selectedSpecialization" class="form-select form-select-lg text-dark"
                        name="specializations" id="specializations">
                        <option v-for="specialization in store.specializations" :value="specialization.id">
                            {{ specialization.name }}
                        </option>
                    </select>
                </div>
                <!-- start filter  -->
                <div class="mb-3 w-50">
                    <label for="filter" class="form-label fs-4 text-white">filter</label>
                    <select class="form-select form-select-lg text-dark" name="filter" id="filter">
                        <option>Order by number of Reviews asc</option>
                        <option>Order by number of Reviews desc</option>
                        <option>Order by average vote asc</option>
                        <option>Order by average vote desc</option>
                    </select>
                </div>
                <button @click="selectSpecialization(this.selectedSpecialization)" type="button" class="btn btn-primary">
                    search
                </button>
            </div>
        </div>
    </div>

    <ProfilesFiltered :idSpecialization="$route.query.specializationSelect"></ProfilesFiltered>
</template>

<style lang="scss" scoped></style>
