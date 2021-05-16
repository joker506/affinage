<template>
    <section class="subscribe">
        <div class="container">
            <div class="subscribe__content">
                <div class="subscribe__info">
                    <h2
                        class="subscribe__title"
                        v-html="params.title"
                    ></h2>
                    <p
                        class="subscribe__text"
                        v-html="params.info"
                    ></p>
                </div>
                <form
                    action=""
                    class="subscribe__form"
                >
                    qweqwrqwr
                </form>
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
    .subscribe {
        display: flex;
        justify-content: center;
        padding: 154px 0;
        background-color: $color_yellow1;

        .container {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        &__content {
            display: flex;
            width: percentage(1060px / 1280px);
            max-width: 1060px;
            padding: 60px percentage(70px / 1280px) 80px;
            border-radius: 10px;
            background-color: #fff;
        }

        &__info {
            display: inline-block;
            vertical-align: top;
            width: percentage(440px / 920px);
            padding-right: percentage(70px / 920px);
        }

        &__title {
            font-size: 40px;
            line-height: (52/40);
            font-weight: 700;
            margin-bottom: 20px;
        }

        &__text {
            font-size: 16px;
            line-height: (28/16);
        }

        &__form {
            width: percentage(480px / 920px);
        }
    }
</style>
