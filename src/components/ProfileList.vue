<script>
import { store } from '../store';
export default {
    name: "ProfileList",
    data() {
        return {
            store,
        }
    },
    mounted() {

        // call api profiles mounted
        const url_profiles = store.api_url + store.api_profile
        this.store.getProfiles(url_profiles);

        // call api specializations mounted
        const url_specializations = store.api_url + store.api_specializations
        this.store.getSpecializations(url_specializations);
    }
}
</script>
<template>
    <div>
        <div id="card_doctor" class="container">
            <h1>Sponsorized Doctors</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div v-for="profile in store.profiles" class="col my-3">
                    <div class="doctor_card card h-100 border-0 d-flex flex-column">
                        <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }"
                            class="text-decoration-none text-dark ">
                            <div class="d-flex flex-column justify-content-between">
                                <img class="card-img-top ratio-1x1 object-fit-cover" height="300" width="300"
                                    :src="store.url_image + profile.doctor_image" :alt="profile.slug">
                                <div class="card-body">
                                    <h4 class="card-title ">{{ profile.user.name + ' ' +
                                        profile.user.surname }}</h4>
                                    <small>{{ profile.user.address }}</small><br>
                                    <small>{{ profile.user.email }}</small>
                                    <p class="card-text">{{ profile.performances }}</p>
                                </div>
                                <div class="phone_number_section card-footer d-flex justify-content-center">
                                    <b class="me-2 text-light">Phone:</b>
                                    <h6 class="text-white mb-0 align-self-center">{{ profile.phone_number }}</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <!-- /card -->
                </div>
            </div>
        </div>
        <!-- /profiles -->
    </div>
</template>