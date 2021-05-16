<template>
    <div class="pages container">
        <nuxt-link to="/">
            <h3>Главная</h3>
        </nuxt-link>

        <nuxt-link to="/">
            <h3>Главная</h3>
        </nuxt-link>

        <nuxt-link to="/">
            <h3>Главная</h3>
        </nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    .pages {
        a {
            display: block;
            transition: color 0.25s ease-in-out;

            &:hover {
                color: rgb(255, 0, 0);
            }
        }
    }
</style>
