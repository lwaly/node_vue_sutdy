<template>
    <div class="container">
        <div>
            <div class="text-right">
                <router-link to="/register">注册</router-link>
                <span> | </span>
                <router-link to="/login">登录</router-link>
            </div>
            <div>
                <div class="py-5 text-center">
                    <img src="../assets/images/sequelize.jpg" />
                    <p class="lead">
                        爱就好比骑马和学法语，如果不趁年轻时学会，以后想学会就难了。
                    </p>
                    <p class="lead">
                        Love is like riding or speaking French,if you don not
                        learn it young, it's hard to get the trick of it later.
                    </p>
                </div>
            </div>
            <div class="mb">
                <div class="list" v-for="content in contents">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">
                            {{ content.title }}
                        </h5>
                        <p class="mb-1">
                            {{ content.created_at }}
                        </p>
                    </div>
                    <p class="mb-5 text-left">
                        {{ content.content }}
                    </p>
                    <footer class="text-right">
                        <a href="">赞({{ content.like_count }})</a>
                        <a href="">回复({{ content.comment_count }})</a>
                        <a href="">我要回复</a>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1, //当前页
            prepage: 2, //每页显示的记录条数
            pages: 1, //总页数
            count: 0, //总记录数
            contents: [
                {
                    title: "lylylylylylylylylyl",
                    created_at: 2019,
                    content: "content",
                    id: 1,
                    like_count: 1,
                    comment_count: 1
                },
                {
                    title:
                        "lylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylyly",
                    created_at: 2019,
                    content: "content",
                    id: 1,
                    like_count: 1,
                    comment_count: 1
                },
                {
                    title:
                        "lylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylylyly",
                    created_at: 2019,
                    content: "content",
                    id: 1,
                    like_count: 1,
                    comment_count: 1
                }
            ]
        };
    }
};
</script>
