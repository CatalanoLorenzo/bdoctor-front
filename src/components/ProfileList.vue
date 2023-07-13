<script>
import { store } from '../store';
export default {
    name: "ProfileList",
    data() {
        return {
            store,
            currentSlide: 0
        }
    },
    methods: {
        nextSlide() {
            if (this.currentSlide === this.store.profiles.length - 1) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }
        },
        prevSlide() {
            if (this.currentSlide === 0) {
                this.currentSlide = this.store.profiles.length - 1;
            } else {
                this.currentSlide--;
            }
        }
    },
    mounted() {
        const url_profiles = store.api_url + store.api_profile;
        this.store.getProfiles(url_profiles);

        const url_specializations = store.api_url + store.api_specializations;
        this.store.getSpecializations(url_specializations);

        setInterval(this.nextSlide, 2000);
    }
}
</script>

<template>
    <div>
        <div id="card_doctor" class="container position-relative">
            <h1>Sponsorized Doctors</h1>
            <!-- buttons -->
            <div class="buttons d-flex w-100 justify-content-center gap-3">
                <div @click="prevSlide" class="bg_opacity p-4 rounded-circle text-white">
                    <i class="fa-sharp fa-solid fa-arrow-left fa-lg"></i>
                </div>
                <div @click="nextSlide" class="bg_opacity p-4 rounded-circle text-white">
                    <i class="fa-sharp fa-solid fa-arrow-right fa-lg"></i>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 position-relative">
                <div v-for="(profile, index) in store.profiles.slice(currentSlide, currentSlide + 3).concat(store.profiles.slice(0, Math.max(0, 3 - store.profiles.length + currentSlide)))"
                    :key="index" class="col my-3">
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