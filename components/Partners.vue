<template>
    <section class="partners">
        <div class="container">
            <div class="partners__info">
                <h2
                    class="partners__title"
                    v-html="params.title"
                ></h2>
                <p
                    class="partners__text"
                    v-html="params.info"
                ></p>
            </div>
        </div>

        <div class="partners__list-wrapper">
            <ul class="partners__list">
                <li
                    v-for="(logo, i) in params.logos"
                    :key="i"
                    class="partners__item"
                >
                    <img
                        :src="logo.image"
                        :alt="logo.alt"
                    >
                </li>
            </ul>
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
    .partners {
        padding: 195px 0;
        background-color: $color_lightgray2;

        &__info {
            max-width: 600px;
            text-align: center;
            margin: 0 auto 40px;
        }

        &__title {
            font-size: 40px;
            line-height: (49/40);
            font-weight: 700;
            margin-bottom: 20px;
        }

        &__text {
            font-size: 16px;
            line-height: (28/16);
        }

        &__list-wrapper {
            overflow: hidden;
        }

        &__list {
            display: flex;
            animation: marquee infinite linear 15s;
        }

        &__item {
            min-width: calc(100% / 6);
            height: 140px;
            padding: 0 25px;
        }
    }

    @keyframes marquee {
        0% {
            transform: translate3d(0, 0, 0);
        }

        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }
</style>
