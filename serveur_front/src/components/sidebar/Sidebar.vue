/* eslint-disable */
<script>
import SidebarLink from "./SidebarLink";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="clrlogo">
      <span v-if="collapsed">
        <div>B</div>
        <div>D</div>
      </span>
      <span>BEYN Dashboard</span>
    </h1>

    <SidebarLink to="/home" icon="fas fa-home">Accueil</SidebarLink>
    <SidebarLink to="/transaction" icon="fas fa-chart-bar">
      Transactions
    </SidebarLink>
    <SidebarLink to="/history" icon="fas fa-columns">Historique</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #00ff7f;
  --sidebar-item-hover: #04AA6D;
  --sidebar-item-active: #04AA6D;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

.clrlogo {
  color: #414141;
}
</style>
