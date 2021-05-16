<template>
    <div class="brodcast-popular">
        <div class="brodcast-popular__container">
            <div class="brodcast-popular__top">
                <button class="btn">Календарь событий</button>
            </div>
            <div class="brodcast-popular__wrap">
                <h2 class="brodcast-popular__title">Популярное</h2>
                <div class="brodcast-popular__slider">
                    <div v-for="item in slide" :key="item.id" class="brodcast-popular__item">
                        <p class="brodcast-popular__text">{{ item.prof }}</p>
                        <img src="/img/samuel.png" alt />
                        <div class="brodcast-popular__card">
                            <img class="brodcast-popular__image" src="/img/Jake.png" alt />
                            <div class="brodcast-popular__calendar">
                                <p class="brodcast-popular--date">
                                    <b>23 мая 2020</b>
                                </p>
                                <p class="brodcast-popular--time">
                                    <b>12</b>
                                </p>
                                <p class="brodcast-popular--view">
                                    <b>50</b>
                                </p>
                            </div>
                        </div>
                        <div class="brodcast-popular__card--bottom">
                            <h2 class="brodcast-popular__bottom--title">
                                Бесплатный мастер-
                                класс про makeup
                            </h2>
                            <p class="brodcast-popular__bottom--text">
                                {{item.name}}
                                <br />Мастер ногтевого сервиса, топ-маст...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class>
                <p>{{ curentSlideIndex }}</p>
                <button @click="prevSlide" class="btn btn-prev">PREV</button>
                <button @click="nextSlide" class="btn btn-next">NEXT</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'BrodcastPopular',

    data() {
        return {
            curentSlideIndex: 0,
            slide: [
                {
                    id: 0,
                    name: 'Сергей Зверев',
                    prof: 'Косметолог',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Бесплатный мастер-класс про makeup',
                },
                {
                    id: 1,
                    name: 'Елизавета Крупицкая',
                    prof: 'бровист',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Основы маникюра',
                },
                {
                    id: 2,
                    name: 'Михаил Никипелов',
                    prof: 'Ресницы',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Рисуем уникальный маникюр. Подготовка',
                },
                {
                    id: 3,
                    name: 'Александр Рождественский',
                    prof: 'ДЕПИЛЯЦИЯ',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Профессия интернет-маникюрщик. Что он делает и как им стать?',
                },
                {
                    id: 4,
                    name: 'Сергей Зверев',
                    prof: 'Косметолог',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Рисуем уникальный маникюр. Подготовка',
                },
                {
                    id: 5,
                    name: 'Александр Рождественский',
                    prof: 'ДЕПИЛЯЦИЯ',
                    img: '/samuel.png',
                    logo: '/Jake.png',
                    title: 'Профессия интернет-маникюрщик. Что он делает и как им стать?',
                },
            ],

        };
    },

    methods: {
        prevSlide() {
            return this.curentSlideIndex - 1;

            //  console.log('click prev');
        },
        nextSlide() {
            return this.curentSlideIndex + 1;
            //  console.log('click next');
        },
    },
};

</script>

<style lang="scss" scoped>

.brodcast-popular {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: $color_black1;
    background-color: #ffff;
    margin: 0;
}

.brodcast-popular__top {
    height: 105px;
    border-bottom: 1px solid $color_lightgray4;
}

.brodcast-popular__container {
    width: 1200px;
    padding: 0;
    margin: 0 auto;
}

.brodcast-popular__title {
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 30px;
}

.brodcast-popular__item {
    width: 290px;
    height: 341px;
    background-color: #ffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    margin-right: 30px;
    margin-bottom: 30px;
}

.brodcast-popular__text {
    position: relative;
    top: 32px;
    width: 134px;
    height: 32px;
    padding-top: 7px;
    text-transform: uppercase;
    text-align: center;
    color: #ffff;
    background-color: $color_black1;
}

.brodcast-popular__card {
    display: flex;
    justify-content: space-between;
}

.brodcast-popular__image {
    position: relative;
    top: -25px;
    left: 5px;
    border-radius: 50%;
}

.brodcast-popular__calendar {
    display: flex;
    justify-content: space-between;
    width: 190px;
}

.brodcast-popular--date,
.brodcast-popular--time,
.brodcast-popular--view {
    position: relative;
    padding-top: 10px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    font-style: normal;
    color: $color_gray2;
}

.brodcast-popular--time {
    &::before {
        content: '';
        position: absolute;
        left: -25px;
        width: 18px;
        height: 18px;
        background-image: url('/img/Heart.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
}

.brodcast-popular--view {
    &::before {
        content: '';
        position: absolute;
        top: 6px;
        left: -25px;
        width: 18px;
        height: 18px;
        background-image: url('/img/Like.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }
}

.brodcast-popular__bottom--title {
    width: 203px;
    height: 44px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    font-style: normal;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.brodcast-popular__bottom--text {
    padding-bottom: 5px;
    color: $color_gray2;
    margin-top: 20px;
    margin-left: 10px;
}

.brodcast-popular__slider {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;
    overflow: hidden;
}

.btn {
    width: 227px;
    height: 45px;
    font-size: 12px;
    line-height: 15px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border: 1px solid $color_black1;
    border-radius: 6px;
    background-color: $color_yellow1;
    margin-top: 30px;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0 0 10px 3px $color_gray2;
        cursor: pointer;
    }
}

.brodcast-section__content--btn {
    background-color: $color_yellow1;
    margin-top: 0;
}

.btn-prev {
    position: relative;
    bottom: 230px;
    display: block;
    width: 100px;
    height: 100px;
}


</style>
