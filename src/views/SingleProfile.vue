<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "SingleProfile",
    data() {
        return {
            store,
        }
    },
    methods: {
        //axios call database for get singleprofile data
        getSingleProfile(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.store.singleProfile = response.data;
                    } else {
                        this.$router.push({
                            name: "pagenotfound404"
                        });
                    }
                })
                .catch(error => {
                    console.error(error.message);
                });
        },
    },
    mounted() {

        //create url for axios call
        const url = this.store.api_url + this.store.api_profile + this.$route.params.slug

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
                        <h2>{{ store.singleProfile.name }} {{ store.singleProfile.surname }}</h2>
                        <img :src="store.singleProfile.doctor_image" alt="">
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
                        <a  class="btn btn-primary" :href="store.api_url + store.singleProfile.cv" role="button">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>