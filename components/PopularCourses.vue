<template>
    <section class="popular-courses">
        <div class="container">
            <div class="popular-courses__header">
                <h2
                    class="popular-courses__title"
                    v-html="params.title"
                ></h2>
                <div
                    class="popular-courses__info"
                    v-html="params.info"
                ></div>
            </div>

            <div class="popular-courses__content">
                <ul class="popular-courses__list">
                    <li class="popular-courses__item popular-courses__item--head">
                        <span>Наименование курса</span>
                        <span>Направление</span>
                        <span>Срок обучения</span>
                        <span>Спикер</span>
                        <span>Рейтинг</span>
                        <span></span>
                    </li>

                    <li
                        v-for="(course, i) in params.courses"
                        :key="i"
                        class="popular-courses__item"
                    >
                        <a
                            :href="params.link"
                            class="popular-courses__link"
                        >
                            <span v-html="course.name"></span>
                            <span v-html="course.direction"></span>
                            <span v-html="course.period"></span>
                            <span v-html="course.speaker"></span>
                            <span v-html="course.rating"></span>
                            <span>
                                <svg
                                    viewBox="0 0 25 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76257 24.5303 5.46967L19.7574 0.696701C19.4645 0.403807
                                        18.9896 0.403807 18.6967 0.696701C18.4038 0.989594 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967
                                        10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303
                                        6.53033ZM-6.55671e-08 6.75L24 6.75L24 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                                    />
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>

                <div class="popular-courses__button-wrapper">
                    <a
                        :href="params.link"
                        class="popular-courses__button"
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
    .popular-courses {
        &__header {
            width: 50%;
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
            padding-bottom: 120px;
        }

        &__list {
            border-top: 1px solid $color_lightgray4;
            margin-bottom: 40px;
        }

        &__item,
        &__link {
            display: flex;

            span {
                display: flex;
                align-items: center;

                &:nth-child(1) {
                    width: percentage(440px / 1280px);
                }

                &:nth-child(2) {
                    width: percentage(234px / 1280px);
                }

                &:nth-child(3) {
                    width: percentage(150px / 1280px);
                }

                &:nth-child(4) {
                    width: percentage(276px / 1280px);
                }

                &:nth-child(5) {
                    justify-content: flex-end;
                    width: percentage(70px / 1280px);
                }

                &:nth-child(6) {
                    justify-content: flex-end;
                    width: percentage(110px / 1280px);
                }

                svg {
                    width: 25px;
                    height: 12px;
                    fill: $color_black1;
                }
            }
        }

        &__item {
            font-size: 16px;
            line-height: (20/16);
            border-bottom: 1px solid $color_lightgray4;

            &--head {
                padding: 20px 0;
                font-size: 10px;
                line-height: (12/10);
                font-weight: 600;
                text-transform: uppercase;
                color: $color_gray2;
            }
        }

        &__link {
            position: relative;
            width: 100%;
            padding: 30px 0;

            &::before {
                content: '';
                position: absolute;
                z-index: -1;
                top: -1px;
                bottom: -1px;
                left: -100vw;
                right: -100vw;
                opacity: 0;
                background: $color_yellow1;
                box-shadow: 0 4px 4px rgba(188, 188, 188, 0.25);
                transition: opacity 0.5s $mainEaseing;
            }

            span {
                &:first-child {
                    font-size: 18px;
                    line-height: (22/18);
                    font-weight: 600;
                }
            }

            &:hover {
                &::before {
                    opacity: 1;
                }
            }
        }

        &__button-wrapper {
            text-align: center;
        }

        &__button {
            display: inline-flex;
            align-items: center;
            height: 45px;
            padding: 0 20px;
            font-size: 12px;
            line-height: (15/12);
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            border: 1px solid $color_yellow1;
            border-radius: 6px;
            background: $color_yellow1;
        }
    }
</style>
