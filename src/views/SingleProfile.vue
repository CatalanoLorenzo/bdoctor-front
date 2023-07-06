<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "SingleProfile",
    data() {
        return {
            store,
            url_image: store.api_url + 'storage/',
        }
    },
    methods: {
        //axios call database for get singleprofile data
        getSingleProfile(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);

                    this.store.singleProfile = response.data.profile;
                    this.store.user = response.data.profile.user

                })
                .catch(error => {
                    console.error(error.message);
                });
        },
    },
    mounted() {

        //create url for axios call

        const url = this.store.api_url + "api/profile/" + this.$route.params.slug
        //use function for axios call 
        this.getSingleProfile(url)


    }
}


</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h2>{{ store.user.name }} {{ store.user.surname }} </h2>
                        <img :src="url_image + store.singleProfile.doctor_image" alt="">
                    </div>
                    <div class="card-body">
                        <p>{{ store.singleProfile.phone_number }}</p>
                        <p>{{ store.singleProfile.address }}</p>

                        <ul>
                            <li v-for="specialization in store.singleProfile.specializations">
                                {{ specialization.name }}
                            </li>
                        </ul>

                        <ul>
                            <li v-for="vote in store.singleProfile.votes">
                                {{ vote.vote }}
                            </li>
                        </ul>

                        <ul>
                            <li v-for="review in store.singleProfile.reviews">
                                <p>{{ review.name }} {{ review.surname }}</p>
                                <p>{{ review.text }}</p>
                                <p>{{ review.data }}</p>
                            </li>
                        </ul>
                        <a class="btn btn-primary" :href="url_image + store.singleProfile.cv" role="button">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>