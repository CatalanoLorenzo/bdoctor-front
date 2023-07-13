<script>
import ProfileList from "../components/ProfileList.vue";
import SingleProfile from "./SingleProfile.vue";
import JumboTron from "../components/JumboTron.vue";
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "HomeView",
  components: {
    ProfileList,
    SingleProfile,
    JumboTron,
    AppBanner,
  },
};
</script>

<template>
  <JumboTron></JumboTron>
  <ProfileList></ProfileList>
  <AppBanner></AppBanner>
</template>
