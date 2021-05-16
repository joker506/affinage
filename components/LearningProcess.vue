<template>
    <section class="learning-process">
        <div class="container">
            <div class="learning-process__head">
                <h2
                    class="learning-process__title"
                    v-html="params.title"
                ></h2>
                <a
                    :href="params.link"
                    class="learning-process__link"
                >
                    <span v-html="params.linkName"></span>
                    <svg
                        viewBox="0 0 17 8"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464465C12.9763
                            0.269203 12.6597 0.269203 12.4645 0.464465C12.2692 0.659727 12.2692 0.97631 12.4645 1.17157L15.2929
                            4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.73079 12.9763 7.73079
                            13.1716 7.53553L16.3536 4.35355ZM4.37114e-08 4.5L16 4.5L16 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        />
                    </svg>
                </a>
            </div>
            <ul class="learning-process__list">
                <li
                    v-for="(item, i) in params.items"
                    :key="i"
                    class="learning-process__item"
                >
                    <div class="learning-process__icon">
                    </div>

                    <p
                        class="learning-process__name"
                        v-html="item.name"
                    ></p>

                    <p
                        class="learning-process__info"
                        v-html="item.info"
                    ></p>
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
    .learning-process {
        padding: 190px 0;

        &__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 70px;
        }

        &__title {
            font-size: 40px;
            line-height: (49/40);
            font-weight: 700;
        }

        &__link {
            font-size: 14px;
            line-height: (17/14);
            font-weight: 600;

            svg {
                width: 20px;
                height: 8px;
                fill: $color_black1;
                margin-left: 20px;
            }
        }

        &__list {
            display: flex;
            justify-content: space-between;
        }

        &__item {
            max-width: percentage(220px / 1280px);

            &:last-child {
                margin-right: 0;
            }
        }

        &__icon {
            width: 110px;
            height: 90px;
            margin-bottom: 40px;
        }

        &__name {
            font-size: 18px;
            line-height: (22/18);
            font-weight: 700;
            margin-bottom: 20px;
        }
    }
</style>
