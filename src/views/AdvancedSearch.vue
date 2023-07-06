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
            selectedSpecialization: ""
        };
    },
    mounted() {
        // call api specializations mounted
        console.log(this.url_profiles);
        this.selectedSpecialization = this.$route.query.specializationSelect;
        const url_specializations = store.api_url + store.api_specializations
        this.store.getSpecializations(url_specializations);
        this.store.selectSpecialization(this.$route.query.specializationSelect)
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-3 w-50">
                    <label for="specializations" class="form-label fs-4 ">Specializations</label>
                    <select v-model="selectedSpecialization" class="form-select form-select-lg text-dark"
                        name="specializations" id="specializations">
                        <option value="all">All</option>
                        <option v-for="specialization in store.specializations" :value="specialization.id">
                            {{ specialization.name }}
                        </option>
                    </select>
                </div>
                <!-- start filter  -->
                <div class="mb-3 w-50">
                    <label for="vote" class="form-label fs-4 ">Filter by vote</label>
                    <select class="form-select form-select-lg text-dark" name="vote" id="vote">
                        <option></option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>
                </div>
                <button
                    @click="this.selectedSpecialization == 'all' ? store.getProfiles(url_profiles) : store.selectSpecialization(this.selectedSpecialization)"
                    type="button" class="btn btn-primary">
                    search
                </button>
            </div>
        </div>
    </div>

    <ProfilesFiltered :idSpecialization="$route.query.specializationSelect"></ProfilesFiltered>
</template>

<style lang="scss" scoped></style>
