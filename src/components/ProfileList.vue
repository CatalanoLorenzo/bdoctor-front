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
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div v-for="profile in store.profiles" class="col my-3">
                    <div class="doctor_card card h-100">
                        <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }">
                            <img class="card-img-top ratio-1x1 object-fit-cover" height="300" width="300"
                                :src="store.url_image + profile.doctor_image" :alt="profile.slug">
                            <div class="card-body">
                                <h4 class="card-title">{{ profile.user.name + ' ' + profile.user.surname }}</h4>
                                <small>{{ profile.user.address }}</small><br>
                                <small>{{ profile.user.email }}</small>
                                <p class="card-text">{{ profile.performances }}</p>
                            </div>
                            <div class="card-footer bg-primary">
                                <h5 class="text-white">{{ profile.phone_number }}</h5>
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