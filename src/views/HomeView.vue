<script>
import ProfileList from '../components/ProfileList.vue';
import SingleProfile from './SingleProfile.vue';
import JumboTron from '../components/JumboTron.vue';

export default {
    name: "HomeView",
    components: {
        ProfileList,
        SingleProfile,
        JumboTron
        }

}
</script>
        
<template>
    <JumboTron></JumboTron>
    <ProfileList></ProfileList>
</template>


<style lang="scss" scoped></style>