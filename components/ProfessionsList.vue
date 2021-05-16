<template>
    <section class="professions-list">
        <div class="container">
            <div class="professions-list__header">
                <h2
                    class="professions-list__title"
                    v-html="params.title"
                ></h2>
                <div
                    class="professions-list__info"
                    v-html="params.info"
                >
                </div>
            </div>

            <div class="professions-list__content">
                <div
                    v-for="(cards, i) in params.cards"
                    :key="i"
                    class="professions-list__item"
                >
                    <CardProfession
                        v-for="(card, j) in cards.cardsItem"
                        :key="j"
                        :params="card"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardProfession from './CardProfession.vue';

export default {
    components: {
        CardProfession,
    },
    props: {
        params: Object,
    },
};
</script>

<style lang="scss">
    .professions-list {
        &__header {
            padding: 80px 0 40px;
        }

        &__title {
            font-size: 40px;
            line-height: (49/40);
            font-weight: 700;
            margin-bottom: 20px;
        }

        &__info {
            font-size: 16px;
            line-height: (28/16);
        }

        &__content {
            display: flex;
            padding: 40px 0 80px;
            border-top: 2px solid $color_lightgray4;
            border-bottom: 2px solid $color_lightgray4;
        }

        &__item {
            display: inline-block;
            vertical-align: top;
            width: percentage(400px / 1280px);
            margin-right: percentage(40px / 1280px);

            &:last-child {
                margin-right: 0;
            }

            .card-profession {
                margin-bottom: 40px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>style
