<script>
import ProfileList from '../components/ProfileList.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: "HomeView",
    components: {
        ProfileList,
        AppFooter
    }

}
</script>
        
<template>
    <ProfileList></ProfileList>
    <AppFooter></AppFooter>
</template>


<style lang="scss" scoped></style>