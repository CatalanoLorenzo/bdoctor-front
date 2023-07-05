<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "ProfileList",
    data() {
        return {
            store,
            url_image: store.api_url + 'storage/',
            selectedSpecialization: '',

        }
    },
    methods: {
        // API call Profiles
        getProfiles(url) {
            axios.get(url).then(response => {
                console.log(response);
                store.profiles = response.data.results.data;
                store.loading = false;
            }).catch(error => {
                console.log(error);
                store.error = error.message
            })
        },
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
        selectSpecialization() {
            const specializationsUrl = store.api_url + store.api_profile
            // + '?specialization_id=' + this.selectedSpecialization
            axios.get(specializationsUrl,
                { params: { specialization_id: this.selectedSpecialization } }
            ).then(response => {
                console.log(response);
                store.profiles = response.data.results;
                store.loading = false;
            }).catch(error => {
                console.log(error);
                store.error = error.message
            })
            console.log('prova');

        }

    },
    mounted() {

        // call api profiles mounted
        const url_profiles = store.api_url + store.api_profile
        this.getProfiles(url_profiles);

        // call api specializations mounted
        const url_specializations = store.api_url + store.api_specializations
        this.getSpecializations(url_specializations);
    }

}
</script>
        
<template>
    <div>
        <div class="container py-4">

            <div class="mb-3">
                <label for="specializations" class="form-label fs-4 text-secondary">Specializations</label>
                <select v-model="selectedSpecialization" @change="selectSpecialization()"
                    class="form-select form-select-lg text-dark" name="specializations" id="specializations">
                    <option class="text-dark" selected>Select one</option>
                    <option v-for=" specialization in store.specializations" :value="specialization.id">
                        {{ specialization.name }}
                    </option>
                </select>
            </div>
        </div>
        <!-- /select -->

        <div class="container">
            <div class="row">
                <div v-for="profile in store.profiles" class="col">
                    <div class="card">
                        <img class="card-img-top" :src="url_image + profile.doctor_image" alt="Title">
                        <div class="card-body">
                            <h4 class="card-title">{{ profile.user.name + ' ' + profile.user.surname }}</h4>
                            <small>{{ profile.user.address }}</small>
                            <small>{{ profile.user.email }}</small>
                            <p class="card-text">{{ profile.performances }}</p>
                        </div>
                        <div class="card-footer bg-primary">
                            <h5 class="text-white">{{ profile.phone_number }}</h5>
                        </div>
                    </div>
                    <!-- /card -->
                </div>
            </div>
        </div>
        <!-- /profiles -->

    </div>
</template>


<style lang="scss" scoped></style>