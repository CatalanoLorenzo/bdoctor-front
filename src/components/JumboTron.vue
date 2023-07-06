<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: "JumboTron",
    data() {


        return {
            store,
            url_image: store.api_url + 'storage/',
            selectedSpecialization: '',
        }
    },
    methods: {

        // API call select specialization
        selectSpecialization() {
            const specializationsUrl = store.api_url + store.api_profile
            // + '?specialization_id=' + this.selectedSpecialization
            axios.get(specializationsUrl,
                { params: { specialization_id: this.selectedSpecialization } }
            ).then(response => {
                console.log(response);
                store.profiles = response.data.results;
                store.loading = false;
            }).catch(error => {
                console.log(error);
                store.error = error.message
            })
            console.log('prova');

        }
    }
}
</script>

<template>
    <div class="jumbotron p-5 mb-4">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-white">Are you looking for a doctor?</h1>
            <p class="col-md-8 fs-4">Search more than 100 medical specialists in your area</p>
            <div class="mb-3 w-50">
                <label for="specializations" class="form-label fs-4 text-white">Specializations</label>
                <select v-model="selectedSpecialization" @change="selectSpecialization()"
                    class="form-select form-select-lg text-dark" name="specializations" id="specializations">
                    <option v-for="  specialization  in  store.specializations " :value="specialization.id">
                        {{ specialization.name }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>