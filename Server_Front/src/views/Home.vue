/* eslint-disable */
<template>
  <Sidebar />
  <div class="footer" :style="{ 'margin-left': sidebarWidth }">
  <div class="client-info">
    <ul class="custom-list">
      <li class="list-item">
        <b>BIENVENU | {{ name.nom }}</b>
      </li>
      <br />
      <li class="list-item">
        <div class="main">SOLDE ACTUEL | {{ name.solde }}-DZD</div>
      </li>
    </ul>
  </div>
  <img src="../assets/Logo.jpg" alt="Bottom Image" />
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
  data() {
    return {
      name: [],
    };
  },
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
console.log(document.cookie);
</script>

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
</style>
