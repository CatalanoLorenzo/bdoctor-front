<script>
import { store } from '../store';
export default {
    name: "ProfileList",
    data() {
        return {
            store,
            currentSlide: 0,
            isMobile: false
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
        },
        checkIfMobile() {
            this.isMobile = window.matchMedia('(max-width: 767px)').matches;
        },
    },
    mounted() {
        const url_profiles = store.api_url + store.api_profile;
        this.store.getProfiles(url_profiles);

        const url_specializations = store.api_url + store.api_specializations;
        this.store.getSpecializations(url_specializations);

        setInterval(this.nextSlide, 2000);
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile);
    },
    destroyed() {
        // Rimozione dell'evento resize quando il componente viene distrutto
        window.removeEventListener('resize', this.checkIfMobile);
    },
}
</script>

<template>
    <div class="profile_list">
        <h2 class=" bg-white p-3 w-100 text-center py-3 mb-2">Featured Doctors </h2>
        <div id="card_doctor" class="container position-relative py-5">

            <!-- buttons -->
            <div class="buttons d-flex w-100 justify-content-center gap-3">
                <div @click="prevSlide" class="bg_opacity p-4 rounded-circle text-white">
                    <i class="fa-sharp fa-solid fa-arrow-left fa-lg"></i>
                </div>
                <div @click="nextSlide" class="bg_opacity p-4 rounded-circle text-white">
                    <i class="fa-sharp fa-solid fa-arrow-right fa-lg"></i>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 position-relative">
                <div v-for="(profile, index) in store.profiles.slice(currentSlide, currentSlide + 3).concat(store.profiles.slice(0, Math.max(0, 3 - store.profiles.length + currentSlide)))"
                    :key="index" class="col my-3">

                    <router-link :to="{ name: 'single-profile', params: { slug: profile.slug } }"
                        class="text-decoration-none text-dark ">
                        <div class="top_card d-flex flex-md-column justify-content-be align-items-center">
                            <div class="image_single_doctor px-2 m-lg-3 ">
                                <img class="rounded-circle" :src="store.url_image + profile.doctor_image"
                                    :alt="profile.slug">
                            </div>
                            <div class=" card-body col-6">
                                <h5 class="card-title text-center fs-1 name_surname text-white">{{ profile.user.name + ' ' +
                                    profile.user.surname }}</h5>
                                <div class="text-center text-white" v-for="specialization in profile.specializations">
                                    {{ specialization.name }}
                                </div>
                            </div>
                        </div>

                    </router-link>

                </div>


            </div>

        </div>
    </div>
    <!-- /profiles -->
</template>