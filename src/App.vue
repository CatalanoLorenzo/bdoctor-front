<script>
import AppHeader from './components/AppHeader.vue';
import HomeView from './views/HomeView.vue';

export default {
    components: {
        AppHeader,
        HomeView,
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <HomeView></HomeView>
</template>


<style lang="scss" scoped >
@use './assets/scss/general.scss';
</style>