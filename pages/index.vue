<template>
    <div>
        <FirstScreen
            :params="response.firstScreen"
        />
        <Sale
            :params="response.sale"
        />
        <ProfessionsList
            :params="response.professions"
        />
        <PopularCourses
            :params="response.popular"
        />
        <About
            :params="response.about"
        />
        <LearningProcess
            :params="response.learning"
        />
        <Partners
            :params="response.partners"
        />
        <Subscribe
            :params="response.subscribe"
        />
    </div>
</template>

<script>
import FirstScreen from '../components/FirstScreen.vue';
import Sale from '../components/Sale.vue';
import ProfessionsList from '../components/ProfessionsList.vue';
import PopularCourses from '../components/PopularCourses.vue';
import About from '../components/About.vue';
import LearningProcess from '../components/LearningProcess.vue';
import Partners from '../components/Partners.vue';
import Subscribe from '../components/Subscribe.vue';

export default {
    components: {
        FirstScreen,
        Sale,
        ProfessionsList,
        PopularCourses,
        About,
        LearningProcess,
        Partners,
        Subscribe,
    },
    asyncData(context) {
        return context.app.$axios.$get('/api/v1/index.json').then(response => ({ response })).catch(e => {
            context.error({
                message: e.response.statusText,
                statusCode: e.response.status,
            });
        });
    },
};
</script>

<style lang="scss">

</style>
