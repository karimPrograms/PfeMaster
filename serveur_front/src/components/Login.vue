<template>
    <section class="container_login">
        <div class="myImg">
            <img src="../assets/Logo(5).png" alt="" />
        </div>
        <div class="myLogin">
        <div class="myForm">
          <h2>Connecter</h2>
          <form>
            <div class="inputs">
              <label for="user">Email ou Nom d'Utilisateur</label>
              <input
                type="text"
                name="Username"
                id="user"
                placeholder="Entrer Votre Email ou Nom d'Utilisateur"
		        required
                v-model="email"
              />
            </div>
            <div class="inputs">
              <label for="password">Mot de Passe</label>
              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Entrer Votre Mot de Passe"
		        required
                v-model="password"
              />
            </div>
            <div class="inputs">
              <button id="myBtn" name="Submit" @click="login">Connecter</button>
            </div>
          </form>
        </div>
      </div>
    </section>
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
            this.$store.commit('login',document.cookie)
            console.log("id is " + this.$store.state.email)
            router.push('/home');
        }else{
            alert("Woops! Email or Mot De Passe incorrect.")
        }
    }
  }
}
</script>

<style scoped>
   
* {
    font-family: Poppins, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    width: 90%;
    margin: 0;
    padding: 0;
  }
  section {
    position: relative;
    width: 100%;
    height: 97.5vh;
    display: flex;
  }
  section .myImg {
    position: relative;
    width: 50%;
    height: 100%;
  }
  section .myImg::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(225deg, #adacac, #3e403e);
    z-index: 1;
    mix-blend-mode: screen;
  }
  section .myImg img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section .myLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .myForm {
    width: 50%;
  }
  .myForm h2 {
    color: #63a860;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 50px;
    border-bottom: 4px solid #607d8b;
    display: inline-block;
    letter-spacing: 1px;
  }
  section .myLogin .myForm .inputs {
    margin-bottom: 30px;
  }
  section .myLogin .myForm .inputs label {
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: #63a860;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1px;
  }
  section .myLogin .myForm .inputs input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #63a860;
    font-size: 16px;
    letter-spacing: 1px;
    color: #63a860;
    background: transparent;
    border-radius: 30px;
  }

  section .myLogin .myForm .inputs button {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #63a860;
    font-size: 16px;
    letter-spacing: 1px;
    color: #63a860;
    background: transparent;
    border-radius: 30px;
  }
  ::placeholder {
  color: #607d8b;
  width: 100vw;
  letter-spacing: normal;
  }
  #myBtn {
    background-color: #607d8b;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
  #myBtn:hover {
    background-color: #49595e;
  }
  #myBtn:active {
    transform: scale(0.98);
  }
  .inputs > p {
    color: #607d8b;
    font-size: 15px;
  }
  .inputs a {
    color: #63a860;
  }
  .inputs a:hover {
    color: green;
  }
</style>