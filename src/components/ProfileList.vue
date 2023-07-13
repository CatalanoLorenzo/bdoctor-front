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
                    <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }"
                        class="text-decoration-none text-dark ">
                        <div class="top_card d-flex flex-column align-items-center">
                            <div class="image_single_doctor m-3 ">
                                <img class="rounded-circle" :src="store.url_image + profile.doctor_image"
                                    :alt="profile.slug">
                            </div>
                            <div class=" card-body col-6">
                                <h5 class="card-title text-center ">{{ profile.user.name + ' ' +
                                    profile.user.surname }}</h5>
                                <div class="text-center" v-for="specialization in profile.specializations">
                                    {{ specialization.name }}
                                </div>
                            </div>
                        </div>
                        <!-- <div class="phone_number_section card-footer d-flex justify-content-center">
                                <b class="me-2 text-light">Phone:</b>
                                <h6 class="text-white mb-0 align-self-center">{{ profile.phone_number }}</h6>
                            </div> -->



                    </router-link>

                </div>
                <!-- /card -->
            </div>



        </div>
    </div>
    <!-- /profiles -->
</template>