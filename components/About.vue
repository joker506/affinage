<template>
    <section class="about">
        <div class="container container--full">
            <div
                class="about__wrapper"
                :style="'background-image: url(' + params.background + ')'"
            >
                <div class="about__content">
                    <h2
                        class="about__title"
                        v-html="params.title"
                    ></h2>
                    <div
                        class="about__subtitle"
                        v-html="params.subtitle"
                    ></div>
                    <div
                        class="about__info"
                        v-html="params.info"
                    ></div>
                    <a
                        class="about__link"
                        :href="params.link"
                        v-html="params.linkName"
                    ></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        params: Object,
    },
};
</script>

<style lang="scss">
    .about {
        &__wrapper {
            position: relative;
            background: no-repeat center center;
            background-size: cover;
        }

        &__content {
            max-width: 525px;
            padding: 220px 0;
            text-align: center;
            margin: 0 auto;
        }

        &__title {
            font-size: 40px;
            line-height: (49/40);
            font-weight: 700;
            margin-bottom: 10px;
        }

        &__subtitle {
            font-size: 18px;
            line-height: (22/18);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        &__info {
            margin-bottom: 30px;
        }

        &__link {
            display: inline-flex;
            align-items: center;
            height: 45px;
            padding: 0 20px;
            font-size: 12px;
            line-height: (15/12);
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            border-radius: 6px;
            background: $color_yellow1;
        }
    }
</style>
