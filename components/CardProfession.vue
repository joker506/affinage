<template>
    <a
        :href="params.link"
        class="card-profession"
        :class="{ 'card-profession--big': params.big }"
        :style="'background-image: url(' + params.image + ')'"
    >
        <div class="card-profession__content">
            <p
                class="card-profession__title"
                v-html="params.name"
            ></p>
            <p
                class="card-profession__info"
                v-html="params.value"
            ></p>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        params: Object,
    },
};
</script>

<style lang="scss">
    .card-profession {
        position: relative;
        display: block;
        height: 165px;
        border-radius: 10px;
        background: no-repeat center center;
        background-size: cover;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(18, 18, 18, 0.75);
        }

        &:hover {
            &::before {
                background: rgba(18, 18, 18, 0.53);
            }

            .card-profession__title {
                color: $color_yellow1;
            }

            .card-profession__info {
                color: #fff;
            }
        }

        &--big {
            height: 250px;
        }

        &__content {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            padding: 0 20px;
            text-align: center;
            transform: translate3d(-50%, -50%, 0);
        }

        &__title {
            font-size: 18px;
            line-height: (22/18);
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 8px;
        }

        &__info {
            font-size: 14px;
            line-height: (17/14);
            color: $color_gray2;
        }
    }
</style>
