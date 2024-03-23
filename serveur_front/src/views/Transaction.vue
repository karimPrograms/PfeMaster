/* eslint-disable */
<template>
  <Sidebar />
  <div class="footer" :style="{ 'margin-left': sidebarWidth }">
  <div class="money-transfer">
    <h2>Transfert D'argent</h2>
    <label for="account-id">ID du Compte du déstinataire</label>
    <input
      id="account-id"
      v-model="accountId"
      placeholder="Saisir l'ID du compte"
    />
    <label for="money-value">Somme à envoyer</label>
    <input
      id="money-value"
      v-model.number="moneyValue"
      placeholder="Entrer la valeur"
    />
    <button
      class="send-button"
      @mouseover="hovered = true"
      @mouseout="hovered = false"
      :style="{ backgroundColor: hovered ? 'green' : '#2f855a' }"
      @click="doTransaction"
    >
      Valider l'envoi
    </button>
  </div>
  <img src="../assets/Logo(3).jpg" alt="Bottom Image" />
  </div>
</template>

<script setup>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
</script>

<script>
import UserServices from "@/services/UserServices";
import router from "@/router";
export default {
  data() {
    return {
      accountId: "",
      moneyValue: ""
    };
  },
  methods:{
    async doTransaction(){
      const response = await UserServices.doTransaction({
        id:this.$store.state.id,
        id_dest:this.accountId,
        amount:this.moneyValue
      })
      console.log(response.data);
      router .push('/home');
    }
  },

};
</script>

<style scoped>
.money-transfer {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

.send-button {
  background-color: #00ff7f;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #00ff7f;
}
</style>
