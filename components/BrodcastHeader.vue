<template>
    <div class="brodcast-header">
        <div class="brodcast-header__container">
            <div class="brodcast-header__wrap">
                <nav class="brodcast-header__nav">
                    <ul class="brodcast-header__items">
                        <li class="brodcast-header__item">
                            <a href="#">Главная</a>
                        </li>
                        <li class="brodcast-header__item">Эфир</li>
                    </ul>
                </nav>
                <h2 class="brodcast-header__title">BeautyNation TV</h2>
            </div>

            <div class="brodcast-header__search">
                <span class="brodcast-header__online">Онлайн эфир</span>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'BrodcastHeader',

    data() {
        return {
            disabled: true,
        };
    },
};


</script>

<style lang="scss" scoped>

.brodcast-header {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: $color_black1;
    background-color: $color_lightgray1;
    margin: 0;
}

.brodcast-header__container {
    display: flex;
    justify-content: flex-start;
    width: 1200px;
    height: 136px;
    padding: 0;
    margin: 0 auto;
}

.brodcast-header__items {
    margin-top: 20px;
    margin-bottom: 20px;
}

.brodcast-header__item {
    display: inline;
    margin-right: 30px;
}

.brodcast-header__item > a {
    position: releative;

    &:disabled {
        color: $color_gray3;
    }

    &::after {
        content: '/\00a0';
        position: absolute;
        left: 144px;
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

</style>
