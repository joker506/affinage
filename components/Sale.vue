<template>
    <div class="sale">
        <div class="container">
            <div class="sale__content">
                <p
                    class="sale__title"
                    v-html="params.title"
                ></p>
                <a
                    :href="params.link"
                    class="sale__link"
                    v-html="params.linkName"
                ></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        params: Object,
    },
};
</script>

<style lang="scss">
    .sale {
        padding: 20px 0;
        font-size: 18px;
        line-height: (22/18);
        font-weight: 600;
        background: $color_yellow1;

        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__title {
            display: inline-block;
            vertical-align: top;
        }

        &__link {
            display: flex;
            align-items: center;
            height: 38px;
            padding: 0 20px;
            font-family: $Monsterrat;
            font-size: 12px;
            line-height: (15/12);
            font-weight: 600;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            border: 1px solid $color_black1;
            border-radius: 6px;
        }
    }
</style>
