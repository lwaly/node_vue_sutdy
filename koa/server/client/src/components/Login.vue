<template>
    <div>
        <div class="py-5 text-center">
            <img src="../assets/images/sequelize.jpg" />
        </div>
        <div>
            <input v-model="phone" placeholder="手机号" />
            <!-- </div>
        <div> -->
            <p>phone: {{ phone }}</p>
        </div>
        <input v-model="pwd" placeholder="密码" />
        <p>pwd: {{ pwd }}</p>
        <button type="button" @click="loginSubmit">登录</button>
    </div>
</template>

<script>
import axios from "axios";
import Store from "@/vuex/store";

export default {
    name: "Login",
    data() {
        return {
            userInfo: {
                uid: 0,
                username: ""
            },
            showname: false
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        register() {
            this.modalName = "register";
        },

        login() {
            this.modalName = "login";
            console.log("data");
        },

        modalClose() {
            this.modalName = "";
        },

        registerSubmit() {
            // console.log(this.reg);

            axios({
                method: "post",
                url: "/api/server/register",
                data: this.reg
            }).then(res => {
                if (res.data.code) {
                    alert(res.data.data);
                } else {
                    this.modalName = "login";
                }
            });
        },

        loginSubmit() {
            console.log("res1");
            axios({
                method: "post",
                url: "/server/login",
                data: this.log
            }).then(res => {
                // eslint-disable-next-line
                console.log(res);
                console.log("res2");
                if (res.data.code) {
                    console.log("res3");
                    alert(res.data.data);
                } else {
                    this.modalName = "";
                    Store.state.user = res.data.data;
                    console.log("res4");
                    console.log(Store.state.user);
                    console.log("res5");
                    this.userInfo.uid = res.data.data.id;
                    this.userInfo.username = res.data.data.username;
                    // this.$router.push({ path: "/" });
                    this.$router.go(-1);
                    // 把用户登录成功后的uid，保存在本地，方便浏览器去获取的位置
                    // localStorage.setItem('uid', this.userInfo.uid);  //使用cookie，就不需要使用这个来存储
                }
            });
        }
    }
};
</script>
