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
          <td>{{ item.id }}</td>
          <td>{{ item.somme }}-DZA</td>
          <td>{{ item.date }}</td>
          <td>{{ item.heure }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <button @click="fetch" class="send-button">Refresh</button>
  </div>
  <img src="../assets/Logo.jpg" alt="Bottom Image" />
  </div>
</template>

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

<script>
import axios from "axios";
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      try {
        const response = await axios.get("http://localhost:80/historique");
        this.items = response.data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
  },
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>
