<template>
    <div class="brodcast-section">
        <div class="brodcast-section__container">
            <div class="brodcast-section__wrap">
                <div class="brodcast-section__video">
                    <p class="brodcast-section__text">Бровист</p>
                    <div class="brodcast-section__online">
                        <span class="brodcast-section__online--text">Прямой эфир</span>
                        <h3
                            class="brodcast-section__online--title"
                        >Моделирование и оформление бровей</h3>
                    </div>
                    <div class="brodcast-section__wrapper">
                        <div class="brodcast-section__calendar">
                            <p class="brodcast-section--date">
                                <b>23 мая в 13:00</b>
                            </p>
                            <p class="brodcast-section--time">
                                <b>12</b>
                            </p>
                            <p class="brodcast-section--view">
                                <b>50</b>
                            </p>
                            <p class="brodcast-section--share">
                                <b>Поделиться</b>
                            </p>
                        </div>
                        <div class="brodcast-section__write">
                            <p class="brodcast-section__write--items">
                                <span class="brodcast-section__write--item"></span>
                                <span class="brodcast-section__write--item"></span>
                                <span class="brodcast-section__write--item"></span>
                                <span class="brodcast-section__write--item"></span>
                                <span class="brodcast-section__write--item"></span>
                            </p>
                            <span class="brodcast-section__write--text">
                                оставили заявки
                                <b>25</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="brodcast-section__content">
                    <h2 class="brodcast-section__content--title">Моделирование бровей</h2>
                    <p
                        class="brodcast-section__content--text"
                    >Онлайн-трансляция самой трендовой процедуры! Полная теоретическая часть, демонстрация процедуры на модели и, конечно, ответы на вопросы в режиме реального времени.</p>
                    <p
                        class="brodcast-section__content--text"
                    >Моделирование бровей — это современная процедура придания бровям желанной формы и цвета, путем индивидуального подхода.</p>
                    <div class="brodcast-section__content--author">
                        <img width="60px" height="60px" src="/img/Anna.png" alt />
                        <p class="brodcast-section__content--wrap">
                            <span>
                                <b>Анна Крупицкая</b>
                            </span>
                            <span style="color: #999;">Мастер - бровист</span>
                        </p>
                    </div>
                    <button @click="popupOpen" class="btn">Написать комментарий</button>
                    <button class="brodcast-section__content--btn btn">Подписаться на эфиры</button>
                </div>
                <div v-if="popupOpenQ" class="popup">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'BrodcastSection',

    data() {
        return {
            disabled: true,
            popupOpenQ: false,

        };
    },
    methods: {
        popupOpen() {
            this.popupOpenQ = true;
        },
    },
};

</script>

<style lang="scss" scoped>
.popup {
    width: 300px;
    height: 300px;
    background-color: rgb(173, 52, 52);
}

.brodcast-section {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: $color_black1;
    background-color: $color_lightgray2;
    margin: 0;
}

.brodcast-section__container {
    width: 1200px;
    padding: 0;
    margin: 0 auto;
}

.brodcast-section__wrap {
    display: flex;
    justify-content: space-between;
}

.brodcast-section__video {
    margin-top: 30px;
}

.brodcast-section__text {
    width: 105px;
    height: 32px;
    padding: 8px;
    text-align: center;
    background-color: #ffff;
}

.brodcast-section__online {
    position: relative;
    width: 820px;
    height: 449px;
    border: 10px solid $color_black1;
    border-radius: 5px;
    background-image: url('/img/Group 1559.png');
    background-position: center;
    background-size: cover;

    &::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 214px;
        background-image: url('/img/Rectangle 995.png');
        background-repeat: no-repeat;
        background-position: bottom;
    }
}

.brodcast-section__online--text {
    position: absolute;
    bottom: 68px;
    height: 20px;
    padding-left: 3px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;
    font-style: normal;
    color: $color_gray2;
    margin-bottom: 5px;
    margin-left: 30px;
}

.brodcast-section__online--title {
    position: absolute;
    bottom: 40px;
    display: block;
    font-size: 32px;
    line-height: 39px;
    color: $color_lightgray1;
    margin-left: 30px;
    /* margin-bottom: 0px; */
}

.brodcast-section__wrapper {
    display: flex;
    justify-content: space-between;
}

.brodcast-section__calendar,
.brodcast-section__write {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 30px;
    margin-bottom: 50px;
    margin-left: 28px;
}

.brodcast-section--date {
    position: releative;
    margin-right: 40px;

    &::before {
        content: '';
        position: absolute;
        left: 76px;
        width: 18px;
        height: 18px;
        background-image: url('/img/clock.svg');
        background-position: center;
        background-size: cover;
    }
}

.brodcast-section--time {
    position: releative;
    margin-right: 40px;

    &::before {
        content: '';
        position: absolute;
        left: 220px;
        width: 18px;
        height: 18px;
        background-image: url('/img/Heart.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}

.brodcast-section--view {
    position: relative;
    margin-right: 40px;

    &::before {
        content: '';
        position: absolute;
        right: 26px;
        width: 18px;
        height: 18px;
        background-image: url('/img/View.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}

.brodcast-section--share {
    position: relative;
    margin-right: 40px;

    &::before {
        content: '';
        position: absolute;
        right: 95px;
        width: 18px;
        height: 18px;
        background-image: url('/img/Share.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
}

.brodcast-header__title {
    font-size: 40px;
    line-height: 49px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 40px;
}

.brodcast-header__online {
    position: relative;
    display: block;
    padding: 5px;
    padding-right: 25px;
    color: $color_gray2;
    margin-top: 65px;
    margin-left: 30px;

    &::before {
        content: '';
        position: absolute;
        top: 10px;
        right: 3px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: $color_red;
    }
}

.brodcast-section__write {
    margin-right: 0;
}

.brodcast-section__write--items {
    margin-top: -10px;
    margin-right: 30px;
}

.brodcast-section__write--item {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url('/img/Ellipse 62.png');
    margin-right: -20px;
}

.brodcast-section__write--text {
    color: $color_gray2;
}

.brodcast-section__write--text > b {
    color: $color_black1;
}

.brodcast-section__content {
    margin-top: 40px;
    margin-left: 50px;
}

.brodcast-section__content--title {
    font-size: 24px;
    line-height: 29px;
    font-weight: 600;
    margin-bottom: 20px;
}

.brodcast-section__content--text {
    font-size: 14px;
    line-height: 26px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 10px;
}

.brodcast-section__content--author {
    display: flex;
    margin-top: 20px;
}

.brodcast-section__content--wrap {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 10px;
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
</style>
