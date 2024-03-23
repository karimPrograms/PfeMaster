<template>
    <router-view />
</template>

<script>

export default {
  name: 'App',
  mounted(){
     this.$store.commit('initialiseStore')
   }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  height: 100%;
  text-align: center; /* Center the image horizontally */
  align-self: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
