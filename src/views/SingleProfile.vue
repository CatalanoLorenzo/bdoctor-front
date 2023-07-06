<script>
import { store } from '../store';
export default {
    name: "SingleProfile",
    data() {
        return {
            store,
        }
    },
    mounted() {

        //create url for axios call
        const url = this.store.api_url + "api/profile/" + this.$route.params.slug
        //use function for axios call 
        this.store.getSingleProfile(url)

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
                        <img class="img-fluid" :src="store.url_image + store.singleProfile.doctor_image" alt="">
                    </div>
                    <div class="card-body">
                        <p>{{ store.singleProfile.phone_number }}</p>
                        <p>{{ store.singleProfile.address }}</p>

                        <ul>
                            <li v-for="specialization in store.singleProfile.specializations">
                                {{ specialization.name }}
                            </li>
                        </ul>

                        <ul v-show="store.singleProfile.votes">
                            <li v-for="vote in store.singleProfile.votes">
                                {{ vote.vote }}
                            </li>
                        </ul>

                        <ul v-show="store.singleProfile.reviews">
                            <li v-for="review in store.singleProfile.reviews">
                                <p>{{ review.name }} {{ review.surname }}</p>
                                <p>{{ review.text }}</p>
                                <p>{{ review.data }}</p>
                            </li>
                        </ul>
                        <a class="btn btn-primary" v-show="store.singleProfile.cv" :href="store.url_image + store.singleProfile.cv" role="button">PDF</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>