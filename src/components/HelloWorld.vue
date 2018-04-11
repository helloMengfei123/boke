<template>
  <div class="hello">
    <img src="../assets/logo.png"></br>
    账号:<input class="userName" id="userName" placeholder="请输入账号" v-model="userName"></br>
    密码:<input type="password" class="Password" id="Password" placeholder="请输入密码" v-model="password"></br>
    <button type="submit" class="btn btn-default" @click="login">登录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      userName:'',
      password:'',
    }
  },
  methods:{
      login() {
         
        let params = new URLSearchParams()
        params.append('userName', this.userName);
        params.append('password', this.password);

        axios.post('/api/login',params).then( res => {
          if(res.data.password){
            sessionStorage.setItem("userName",res.data.userName)
            sessionStorage.setItem("password",res.data.password)
            this.$router.push({
							path: '/pageOne'
						});
          }
        }).catch( e=> {
          console.info(e)
        })
      }
  },
  mounted(){
      axios({
      url: '/api/oo',
      method: 'GET',
    }).then( res => {
      console.info(res)
    }).catch( e=> {
      console.info(e)
    })

  }
}
</script>


