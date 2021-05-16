<template>
    <div class="catalog-header">
        <div class="catalog-header__container">
            <div class="catalog-header__wrap">
                <nav class="catalog-header__nav">
                    <ul class="catalog-header__items">
                        <li class="catalog-header__item">
                            <a href="#">Главная</a>
                        </li>
                        <li class="catalog-header__item">Каталог курсов</li>
                    </ul>
                </nav>
                <h2 class="catalog-header__title">Каталог курсов</h2>
            </div>

            <div class="catalog-header__search">
                <label for="seach">
                    <input type="text" placeholder="Поиск" class="catalog-header__search--input" />
                </label>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CatalogHeader',

    data() {
        return {
            disabled: true,
        };
    },
};


</script>

<style lang="scss" scoped>

.catalog-header {
    height: 120px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: $color_lightgray1;
    background-color: $color_gray1;
    background-image: url('/img/background.jpg');
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
}

.catalog-header__container {
    display: flex;
    justify-content: flex-start;
    width: 1280px;
    padding: 0;
    margin: 0 auto;
    margin-left: 80px;
}

.catalog-header__wrap {
    margin-right: 35px;
}

.catalog-header__items {
    margin-top: 20px;
    margin-bottom: 20px;
}

.catalog-header__item {
    display: inline;
    font-size: 14px;
    line-height: 17px;
    font-style: regular;
    margin-right: 35px;
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

.catalog-header__title {
    font-size: 28px;
    line-height: 24px;
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 40px;
}

.catalog-header__search {
    position: releative;
}

.catalog-header__search--input {
    width: 950px;
    height: 35px;
    padding: 10px;
    padding-right: 30px;
    padding-bottom: 15px;
    font-size: 16px;
    color: $color_gray2;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    background-image: url(/img/search.svg);
    background-repeat: no-repeat;
    background-position: right;
    margin-top: 57px;
    margin-left: 30px;
}

</style>
