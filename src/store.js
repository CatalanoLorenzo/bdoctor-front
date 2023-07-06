import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    loading: true,
    error: null,
    api_url: "http://127.0.0.1:8000/",
    api_profile: "api/profiles",
    api_specializations: "api/specializations",
    profiles: [],
    singleProfile: [],
    specializations: [],
    user: [],
    url_image: 'http://127.0.0.1:8000/storage/',
    //------------------Function--------------------------------
    // API call select specialization
        /**
         * 
         * @param {String} param 
         */
        selectSpecialization(param) {
            const specializationsUrl = store.api_url + store.api_profile;
            // + '?specialization_id=' + this.selectedSpecialization
            axios
                .get(specializationsUrl, {
                    params: { specialization_id: param }
                })
                .then((response) => {
                    console.log(response);
                    store.profiles = response.data.results;
                    store.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                    store.error = error.message;
                });
        },
    // API call Profiles
    getProfiles(url) {
        axios.get(url).then(response => {
            console.log(response);
            this.profiles = response.data.results.data;
            this.loading = false;
        }).catch(error => {
            console.log(error);
            this.error = error.message
        })
    },
    // API call Specializations
    getSpecializations(url) {
        axios.get(url).then(response => {
            //console.log(response);
            this.specializations = response.data.results;
            this.loading = false;
        }).catch(error => {
            console.log(error);
            this.error = error.message
        })
    },
    //axios call database for get singleprofile data
    getSingleProfile(url) {
        axios
            .get(url)
            .then(response => {
                console.log(response);

                this.singleProfile = response.data.profile;
                this.user = response.data.profile.user

            })
            .catch(error => {
                console.error(error.message);
            });
    },

});
