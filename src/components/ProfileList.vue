<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "ProfileList",
    data() {
        return {
            store
        }
    },
    methods: {
        getProfiles(url) {
            axios.get(url).then(response => {
                console.log(response);
                store.profiles = response.data.results.data;
                store.loading = false;
            }).catch(error => {
                console.log(error);
                store.error = error.message
            })
        }
    },
    mounted() {
        const url = store.api_url + store.api_profile
        this.getProfiles(url)
    }

}
</script>
        
<template>
    <div>
        <p>{{ store.profiles }}</p>
    </div>
</template>


<style lang="scss" scoped></style>