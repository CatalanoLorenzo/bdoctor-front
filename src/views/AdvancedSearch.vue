<script>
import { store } from "../store";
import ProfilesFiltered from "../components/ProfilesFiltered.vue";
import SearchPannel from "../components/SearchPannel.vue";
export default {
  name: "AdvancedSearch",
  components: { ProfilesFiltered, SearchPannel, },
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
    const url_specializations = store.api_url + store.api_specializations;
    this.store.getSpecializations(url_specializations);
  },
};
</script>
<template>
  <main>
    <SearchPannel></SearchPannel>
    <ProfilesFiltered :idSpecialization="$route.query.specializationSelect"></ProfilesFiltered>
  </main>
</template>