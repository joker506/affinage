<template>
    <div class="main-wrapper">
        <Header />
        <main class="main">
            <nuxt />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Helpers from '../plugins/helpers';

export default {
    components: {
        Header,
        Footer,
    },

    data() {
        return {
            isDev: (process.env.NODE_ENV !== 'production'),
        };
    },

    mounted() {
        if (this.isDev) {
            // grid layout
            const cookieGridName = 'grid_cookie';

            document.body.addEventListener('keydown', event => {
                if (event.ctrlKey && event.keyCode === 186) { // "ctrl + ;"
                    document.body.classList.toggle('is-grid');

                    if (document.body.classList.contains('is-grid')) {
                        Helpers.setCookie(cookieGridName, true, 7);
                    } else {
                        Helpers.eraseCookie(cookieGridName);
                    }
                }
            });

            if (Helpers.getCookie(cookieGridName)) {
                document.body.classList.add('is-grid');
            }
        }
    },
};
</script>

<style lang="scss">
</style>
