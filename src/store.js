import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    //---------------Variable-------------------------
    loading: null,
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

    /**SELECTSPECIALIZATION
     * function for get all specialization by API call to server
     * 
     * @param {String} value 
     */
    selectSpecialization(value) {

        //set status var loading TUE
        this.loading = true;

        //generate URL for call API
        const specializationsUrl = store.api_url + store.api_profile;

        //call API
        axios
            //URL and param for use call API
            .get(specializationsUrl, {
                params: { specialization_id: value }
            })
            //get response and save into var profiles and chage status var loading
            .then((response) => {

                //console.log(response);
                this.profiles = response.data.results;
                //console.log(this.profiles);
                this.loading = false;
            })
            //get error 
            .catch((error) => {

                //console.log(error);
                this.error = error.message;
            });
    },

    /**GETPROFILES
     * API call for get all profiles
     * 
     * @param {String} url 
     */
    getProfiles(url) {

        //set status var loading TUE
        this.loading = true;

        axios
            .get(url)
            //get response and save into var profiles and chage status var loading
            .then(response => {

                //console.log(response);
                this.profiles = response.data.results.data;
                this.loading = false;

            })
            //get error 
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
    },

    /**GETSPECIALIZATIONS
     * API call Specializations
     * 
     * @param {String} url 
     */
    getSpecializations(url) {

        //set status var loading TUE
        this.loading = true;

        axios
            .get(url)
            //get response and save into var specializations and chage status var loading
            .then(response => {

                //console.log(response);
                this.specializations = response.data.results;
                this.loading = false;
            })
            //get error 
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
    },
    /**GETSINGLEPROFILE
     * axios call database for get singleprofile data
     * 
     * @param {String} url 
     */
    getSingleProfile(url) {

        //set status var loading TUE
        this.loading = true;

        axios
            .get(url)
            //get response and save into var singleprofiles and into var user ,chage status var loading
            .then(response => {

                //console.log(response);
                this.singleProfile = response.data.profile;
                this.user = response.data.profile.user
                this.loading = false;


            })
            //get error 
            .catch(error => {
                console.error(error.message);
                this.error = error.message
            });
    },

});
