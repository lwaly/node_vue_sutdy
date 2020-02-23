<template>
    <div>
        <div class="py-5 text-center">
            <img src="../assets/images/sequelize.jpg" />
        </div>
        <input v-model="phone" placeholder="手机号" />
        <p>phone: {{ phone }}</p>
        </br>
        <input v-model="pwd" placeholder="密码" />
        <p>pwd: {{ pwd }}</p>
        </br>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            phone: '',
            pwd: '',
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
            console.log("data")
        },

        modalClose() {
            this.modalName = "";
        },

        registerSubmit() {
            // console.log(this.reg);

            axios({
                method: "post",
                url: "/api/register",
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
            // axios({
            //     method: "post",
            //     url: "/api/login",
            //     data: this.log
            // }).then(res => {
            //     // eslint-disable-next-line
            //     console.log(res);
            //     if (res.data.code) {
            //         alert(res.data.data);
            //     } else {
            //         this.modalName = "";
            //         this.userInfo.uid = res.data.data.id;
            //         this.userInfo.username = res.data.data.username;

            //         // 把用户登录成功后的uid，保存在本地，方便浏览器去获取的位置
            //         // localStorage.setItem('uid', this.userInfo.uid);  //使用cookie，就不需要使用这个来存储
            //     }
            // });
                  // this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd).then((response) => {
      // 	//这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
      // 	//注意这里是个难点，Vuex与Vue-Resource结合使用。
      // 	if(response.body != null & response.body.length > 0){
      this.$store.commit("isLogin", "response.body[0]");
      this.name = "";
      this.pwd = "";
      this.$router.push({ path: "content" });
      // 	}else{
      // 		alert('请输入正确的用户名和密码！！！');
      // 		this.name=''
      // 		this.pwd= ''
      // 	}

      // }).then((error)=> this.error = error)
      console.log("OK");
      return true;
        }
    }
};
</script>
