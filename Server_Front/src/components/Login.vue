<template>
    <div class="login-form">

        <h2>Login</h2>

            <input type="text" name="email" placeholder="Email" v-model="email" ><br>
            <input type="password" name="password" placeholder="Password" v-model="password"><br>
            <button name="submit" @click="login">Login</button>

    </div>
</template>

<script>
import router from '@/router';
import AuthenticationService from '@/services/AuthenticationService';

function setcookie(token,expires,path){
        document.cookie = "userSave = " + token + expires + path + ";SameSite=None";
}

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods:{
    async login() {
        const response = await AuthenticationService.login({
            email:this.email,
            password:this.password
        })
        console.log(response.data.cookieOptions.maxAge)
        if(response.data.message=="ok"){
            let token = response.data.token;
            let expires = ";expires="+ response.data.cookieOptions.maxAge;
            let path = ";path=/";
            await setcookie(token,expires,path)
            console.log("cookie set")
            console.log(document.cookie)
            console.log("going home")
            router.push('/home');
        }
    }
  }
}
</script>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .login-form {
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
        width: 300px;
        text-align: center;
    }

    .login-form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    .login-form button {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        box-sizing: border-box;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-form button:hover {
        background-color: #0056b3;
    }
</style>