<script>
import ProfileList from '../components/ProfileList.vue';
import SingleProfile from './SingleProfile.vue';

export default {
    name: "HomeView",
    components: {
        ProfileList,
        SingleProfile,
    }

}
</script>
        
<template>
    <ProfileList></ProfileList>
</template>


<style lang="scss" scoped></style>