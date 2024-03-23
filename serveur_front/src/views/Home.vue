/* eslint-disable */
<template>
  <Sidebar />
  <div class="parent_div" :style="{ 'margin-left': sidebarWidth, 'width': `calc(100vw - ${sidebarWidth})`, 'hight':`100%`}">

    <div class="dashboard">
      <div class="dashboard_text">
        <p class="text1">Dashboard:</p>
      </div>
    </div>

    <div class="welcome">
      <div class="welcome_text">
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="32.75" viewBox="0 0 576 512" ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#00ff80" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>--></svg>
        <p class="text2" style="flex-basis: 220px;">Bienvenue</p>
        <div class="resize">
        <p class="text3" style="flex-basis: 250px;">{{ Nom }} {{ Prenom }}</p></div>
      </div>
      <div class="logout">
              <a class="logout_button" v-if="$store.state.id" @click="logout">Déconnecter</a>
      </div>
    </div>

    <div class="solde" style="align-self: center">
      <div class="solde_text">
        <div class="solde_info">
          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="37.75" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#00ff7f" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>--></svg>
          <p class="text4" style="flex-basis: 250px;">Solde actuel</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="37.75" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#00ff7f" d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>--></svg>
        </div>
        <div class="resize">
          <p class="text5" style="flex-basis: 250px;">{{ Solde }} DZD</p>
        </div>
      </div>
    </div>

    <div class="image">
      <!-- <img src="../assets/Logo(3).jpg" alt="Bottom Image" /> -->
    </div>
  </div>
</template>

<style scoped>
.client-info {
  font-family: Arial, sans-serif;
  background-color: #00ff7f;
  padding: 25px;
  border-radius: 10px;
  border: none;
}

.custom-list {
  list-style: none;
  padding: 0;
}

.list-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #124306;
  font-size: 16px;
}

.main {
  font-size: 40px;
  text-shadow: 0 0 6px #77ee0f;
}

.parent_div{
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  height: 100vh;
}

.dashboard {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vw;
}

.text1{
  margin: 1vw;
  font-size: 35px;
  font-weight: bold;
}

.dashboard_text {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:flex-end;
}

.welcome {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2vw;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.welcome_text {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;
  margin-left: 2vw;
  margin-right: 2vw;
  width: 60vw;
}

.text2{
  font-size: 30px;
  font-weight: bold;
}

.text3{
  font-size: 25px;
  font-weight: bold;
}

.logout{
  width: 30vw;
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
  align-items: center;
}

.logout_button{
  background-color: white;
  color: black;
  border: 3px solid rgb(253, 93, 93);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all .4s ease;
  border-radius: 5px;
}

.logout_button:hover, .logout_button:active {
  background-color: rgb(253, 93, 93);
  color: white;
}

.solde{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3vw;
  padding-top: 1vw;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 35vw;
}

.solde_text{
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  margin-right: 2vw;
  align-items:center;
}

.solde_info{
  display: flex;
  flex-direction: row;
  align-items:center;
  width: 20vw;
}

.text4{
  font-size: 30px;
  font-weight: bold;
}

.text5{
  font-size: 50px;
  font-weight: bold;
}

.image{
  max-width: 100%; /* This will make the image take up at most 100% of its parent's width */
  max-height: 100vh; 
}
</style>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
import router from '@/router';
import UserServices from "@/services/UserServices";

export default {
  data() {
    return {
      Nom: "",
      Prenom: "",
      Solde: ""
    };
  },
  methods:{
    logout(){
      this.$store.commit('logout')
      router.push('/login');
    },
    async getUserInfo(){
      const response = await UserServices.getUserInfo({id:this.$store.state.id})
      this.Nom = response.data[0].Nom;
      this.Prenom = response.data[0].Prenom;
      this.Solde = response.data[0].Solde;
    }
  },
  mounted(){
    this.getUserInfo()
  },
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>
