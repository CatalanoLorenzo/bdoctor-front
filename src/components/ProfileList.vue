<script>
import { store } from '../store';
import JumboTron from './JumboTron.vue';
import axios from 'axios';
export default {
    name: "ProfileList",
    components: {
        JumboTron
    },
    data() {
        return {
            store,
            url_image: store.api_url + 'storage/',


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
        <JumboTron></JumboTron>
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