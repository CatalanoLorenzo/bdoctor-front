<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import HomeView from './views/HomeView.vue';

export default {
    components: {
        AppHeader,
        HomeView,
        AppFooter
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <HomeView></HomeView>
    <AppFooter></AppFooter>
</template>


<style lang="scss" scoped >
@use './assets/scss/general.scss';
</style>