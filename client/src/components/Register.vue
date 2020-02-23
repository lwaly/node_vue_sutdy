<template>
    <div>
        <router-link to="/">Go to index</router-link>
        <div class="py-5 text-center">
            <img src="../assets/images/sequelize.jpg" />
            <p class="lead">
                爱就好比骑马和学法语，如果不趁年轻时学会，以后想学会就难了。
            </p>
            <p class="lead">
                Love is like riding or speaking French,if you don not learn it
                young, it's hard to get the trick of it later.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>
