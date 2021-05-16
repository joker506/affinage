<template>
    <div>
        <CatalogHeader />
        <CatalogMain />
    </div>
</template>

<script>

import CatalogHeader from '../components/CatalogHaedaer.vue';
import CatalogMain from '../components/CatalogMain.vue';

export default {
    components: {
        CatalogHeader,
        CatalogMain,
    },

};
</script>

<style lang="scss"></style>
