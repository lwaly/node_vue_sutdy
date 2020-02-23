<template>
    <div id="app">
        <div class="container">
            <div>
                <div class="py-5 text-center">
                    <img src="./assets/images/sequelize.jpg" />
                    <p class="lead">
                        爱就好比骑马和学法语，如果不趁年轻时学会，以后想学会就难了。
                    </p>
                    <p class="lead">
                        Love is like riding or speaking French,if you don not
                        learn it young, it's hard to get the trick of it later.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
