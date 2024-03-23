/* eslint-disable */
<template>
  <Sidebar />
  <div class="footer" :style="{ 'margin-left': sidebarWidth }">
  <div class="table-container">
    <h1>Historique de vos virements</h1>
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID déstinataire</th>
          <th>Somme</th>
          <th>Date</th>
          <th>Heure</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.Id_Distination }}</td>
          <td>{{ item.Montant }}</td>
          <td>{{ item.Date }}</td>
          <td>{{ item.Heure }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <button @click="getHistory" class="send-button">Refresh</button>
  </div>
  <img src="../assets/Logo(3).jpg" alt="Bottom Image" />
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
import UserServices from "@/services/UserServices";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getHistory(){
      const response = await UserServices.getHistory({
        id:this.$store.state.id,
      })
      console.log(response.data);
      this.items = response.data;
    }
  },
  mounted(){
    this.getHistory()
  },
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style scoped>
.table-container {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.custom-table th {
  background-color: #00ff7f;
  font-weight: bold;
}

.send-button {
  background-color: #276749;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>

