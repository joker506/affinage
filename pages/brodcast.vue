<template>
    <div>
        <BrodcastHeader />
        <BrodcastSection />
        <BrodcastPopular />
    </div>
</template>

<script>

import BrodcastHeader from '../components/BrodcastHeader.vue';
import BrodcastSection from '../components/BrodcastSection.vue';
import BrodcastPopular from '../components/BrodcastPopular.vue';

export default {
    components: {
        BrodcastHeader,
        BrodcastSection,
        BrodcastPopular,
    },

};
</script>

<style lang="scss"></style>
