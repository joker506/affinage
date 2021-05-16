<template>
    <div class="catalog-main">
        <div class="catalog-main__container">
            <div class="catalog-main__wrap">
                <nav class="catalog-main__nav">
                    <ul class="catalog-main__items">
                        <li class="catalog-main__item">
                            <a href="#">Все направления</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Ногтевой сервис</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Визаж</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Ресницы</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Депиляция</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Бровист</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Барбер</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Косметология</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Стилист-парикмахер</a>
                        </li>
                        <li class="catalog-main__item">
                            <a href="#">Стилист-парикмахер</a>
                        </li>
                    </ul>
                </nav>
                <div class="catalog-main__top">
                    <div class="catalog-main__top--wrapp">
                        <ul class="catalog-main__menu">
                            <li class="catalog-main__menu-item">
                                <a href="#">Все</a>
                            </li>
                            <li class="catalog-main__menu-item">
                                <a href="#">Новинки</a>
                            </li>
                            <li class="catalog-main__menu-item">
                                <a href="#">Скидки</a>
                            </li>
                            <li class="catalog-main__menu-item">
                                <a href="#">Профессии</a>
                            </li>
                            <li class="catalog-main__menu-item">
                                <a href="#">Курсы</a>
                            </li>
                        </ul>
                        <div class="catalog-main__filter">
                            <select class="catalog-main__filter-sel">
                                <option class="catalog-main__filter-item">
                                    <a href="#">По популярности</a>
                                </option>
                                <option class="catalog-main__filter-item">
                                    <a href="#">Популярные</a>
                                </option>
                                <option class="catalog-main__filter-item">
                                    <a href="#">Цена по возрастанию</a>
                                </option>
                                <option class="catalog-main__filter-item">
                                    <a href="#">Цена по убыванию</a>
                                </option>
                                <option class="catalog-main__filter-item">
                                    <a href="#">Сначала длинные курсы</a>
                                </option>
                                <option class="catalog-main__filter-item">
                                    <a href="#">Сначала короткие курсы</a>
                                </option>
                                <!-- <div class="catalog-main__filter--wrap">
                                <li class="catalog-main__filter-item">
                                    <a href="#">По популярности</a>
                                </li>
                                <li class="catalog-main__filter-item" v-if="show">
                                    <a href="#">Популярные</a>
                                </li>
                                <li class="catalog-main__filter-item" v-if="show">
                                    <a href="#">Цена по возрастанию</a>
                                </li>
                                <li class="catalog-main__filter-item" v-if="show">
                                    <a href="#">Цена по убыванию</a>
                                </li>
                                <li class="catalog-main__filter-item" v-if="show">
                                    <a href="#">Сначала длинные курсы</a>
                                </li>
                                <li class="catalog-main__filter-item" v-if="show">
                                    <a href="#">Сначала короткие курсы</a>
                                </li>
                            </div>
                                -->
                            </select>
                        </div>
                    </div>
                    <div class="catalog-main__cards">
                        <div
                            v-for="card in cards.slice(0,3)"
                            :key="card.id"
                            class="catalog-main__card"
                        >
                            <div class="catalog-card__wrap--card">
                                <img
                                    class="catalog-main__logo"
                                    width="85px"
                                    height="85px"
                                    :src="require('static/img/course'+card.img)"
                                />
                            </div>
                            <div class="catalog-card__wrap">
                                <span class="catalog-main__course">Курсы</span>
                                <h3 class="catalog-main__title">{{card.nameCurse}}</h3>
                                <div class="catalog-main__wrapper">
                                    <p class="catalog-main__time--date">
                                        Дата начала:
                                        <b>26 апреля</b>
                                    </p>
                                    <p class="catalog-main__time--time">
                                        <b>12 ч. 20 мин.</b>
                                    </p>
                                    <p class="catalog-main__time--like">
                                        Рейтинг:
                                        <b>9.8</b>
                                    </p>
                                </div>
                            </div>
                            <div class="catalog-main__card-logo">
                                <a href="#">
                                    <img :src="require('static/img/course'+card.logo)" alt />
                                </a>
                            </div>
                            <p class="catalog-main__log-link">
                                <a href="#">
                                    <img width="30px" src="/img/arrow-right.svg" alt />
                                </a>
                            </p>
                        </div>
                        <div class="catalog-main__cards--wrap">
                            <p class="catalog-main__cards--link prev" @click="moreInfo(cards)">
                                <a href="#"></a>
                            </p>
                            <p class="catalog-main__cards--link number">
                                <a href="#">1</a>
                            </p>
                            <p class="catalog-main__cards--link number">
                                <a href="#">2</a>
                            </p>
                            <p class="catalog-main__cards--link number">
                                <a href="#">3</a>
                            </p>
                            <p class="catalog-main__cards--link next">
                                <a href="#"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogMain',
    methods: {
        moreInfo(cards) {
            console.log(cards.slice(0, 3));
        },
    },
    data() {
        return {
            show: false,
            cards: [
                {
                    id: 0,
                    nameCurse: 'Основы SPA косметологии',
                    img: '/c1.png',
                    logo: '/image 8.png',
                },
                {
                    id: 1,
                    nameCurse: 'Обучение восковой депиляции',
                    img: '/c2.png',
                    logo: '/image 10.png',
                },
                {
                    id: 2,
                    nameCurse: 'Аппаратный маникюр',
                    img: '/c3.png',
                    logo: '/image 11.png',
                },
                {
                    id: 3,
                    nameCurse: 'Моделирование бровей',
                    img: '/c4.png',
                    logo: '/image 12.png',
                },
                {
                    id: 4,
                    nameCurse: 'Моделирование бровей',
                    img: '/c1.png',
                    logo: '/image 8.png',
                },
            ],

        };
    },
};
</script>

<style lang="scss" scoped>

.catalog-main__container {
    display: flex;
    justify-content: flex-start;
    width: 1280px;
    padding: 0;
    margin: 0 auto;
    margin-left: 80px;
}

.catalog-main__wrap {
    display: flex;
}

.catalog-main__nav {
    margin-right: 130px;
}

.catalog-main__items {
    margin-top: 25px;
    margin-right: 30px;
}

.catalog-main__item {
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    font-style: normal;
    border-bottom: 3px solid transparent;
    margin-bottom: 15px;

    &:hover {
        box-sizing: border-box;
        color: $color_yellow1;
        border-bottom: 3px solid $color_yellow1;
    }
}

.catalog-header__item > a {
    position: releative;
    color: $color_lightgray1;

    &:disabled {
        color: $color_gray3;
    }

    &::after {
        content: '/\00a0';
        position: absolute;
        left: 144px;
    }
}

.catalog-main__top--wrapp {
    display: flex;
    justify-content: space-between;
    width: 950px;
    height: 60px;
    border-bottom: 1px solid $color_lightgray4;
}

.catalog-main__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 950px;
    //height: 80px;
    margin-bottom: 30px;
}

.catalog-main__menu {
    display: flex;
    height: 40px;
    margin-top: 25px;
}

.catalog-main__menu-item {
    padding-top: 10px;
    padding-bottom: 20px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    font-style: normal;
    color: $color_gray3;
    border-bottom: 3px solid transparent;
    margin-right: 30px;
    margin-bottom: 15px;

    &:hover {
        color: $color_black1;
        border-bottom: 3px solid $color_yellow1;
    }
}

.catalog-main__filter {
    display: block;
    margin-top: 25px;
    margin-right: 0;
}

.catalog-main__filter-item {
    width: 330px;
    height: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    color: $color_black1;
    border: 1px solid $color_yellow2;
    background-color: #ffff;

    &:hover {
        background-color: $color_gray2;
        cursor: pointer;
    }
}

.catalog-main__filter-sel {
    width: 160px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    font-style: normal;
    color: #121212;
    border: none;
    margin-top: 10px;
    cursor: pointer;
}

.catalog-main__cards {

}

.catalog-main__card {
    display: flex;
    width: 950px;
    height: 133px;
    //justify-content: space-between;
    background-color: $color_lightgray1;
    margin-top: 30px;
}

.catalog-card__wrap {
    width: 610px;
    margin-top: 10px;
}

.catalog-card__wrap--card {
    width: 110px;
    margin-top: 28px;
    margin-left: 20px;
}

.catalog-main__title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    font-style: normal;
    margin-top: 5px;
}

.catalog-main__course {
    display: block;
    font-size: 12px;
    line-height: 15px;
    text-transform: lowercase;
    color: $color_gray2;
    margin-top: 18px;
}

.catalog-main__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.catalog-main__time--date {
    position: relative;
    padding-left: 25px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url('/img/calendar.svg');
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
}

.catalog-main__time--time {
    position: relative;
    padding-left: 25px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url('/img/calendar.svg');
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
}

.catalog-main__time--like {
    position: relative;
    padding-left: 30px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url('/img/Like.svg');
        background-repeat: no-repeat;
        /* background-size: contain; */
        background-position: 50% 50%;
    }
}

.catalog-main__card-logo {
    margin-top: 20px;
    margin-left: 100px;
}

.catalog-main__log-link {
    margin-top: 60px;
    margin-right: 40px;
}

.catalog-main__cards--wrap {
    display: flex;
    justify-content: center;
    margin-top: 60px;
}

.catalog-main__cards--link {
    width: 59px;
    height: 32px;
    padding: 5px;
    text-align: center;
    border: 1px solid $color_gray3;
    border-radius: 8px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
        background-color: $color_yellow1;
    }
}

.prev {
    background-image: url('/img/Prev.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto;
}

.next {
    background-image: url('/img/Next.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto;
}

.number {
    width: 32px;
    height: 32px;
}

</style>
