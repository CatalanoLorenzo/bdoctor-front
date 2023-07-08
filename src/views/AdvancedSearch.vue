<script>
import { store } from "../store";
import ProfilesFiltered from "../components/ProfilesFiltered.vue";
import SearchPannel from "../components/SearchPannel.vue";
export default {
  name: "AdvancedSearch",
  components: { ProfilesFiltered, SearchPannel, SearchPannel },
  data() {
    return {
      store,
      url_profiles: store.api_url + store.api_profile,
      selectedSpecialization: "",
    };
  },
  mounted() {
    // call api specializations mounted
    console.log(this.url_profiles);
    this.selectedSpecialization = this.$route.query.specializationSelect;
    const url_specializations = store.api_url + store.api_specializations;
    this.store.getSpecializations(url_specializations);
    this.store.selectSpecialization(this.$route.query.specializationSelect);
  },
  computed() {
    this.accessChildValue();
  }
};
</script>
<template>
  <SearchPannel></SearchPannel>
  <ProfilesFiltered :idSpecialization="$route.query.specializationSelect"></ProfilesFiltered>
</template>

