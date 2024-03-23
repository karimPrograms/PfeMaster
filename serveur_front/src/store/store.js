import { createStore } from 'vuex'
import { jwtDecode } from 'jwt-decode';

export default createStore({
  state: {
    id:""
  },
  getters: {
  },
  mutations: {
    login (state,id) {
      const decodedToken = jwtDecode(id);
      console.log(decodedToken.id);
      state.id = decodedToken.id;
      localStorage.setItem('id', state.id);
    },
    logout(state){
      state.id ="";
      localStorage.removeItem('id');
    },
    initialiseStore(state) {
      if(localStorage.getItem('id')){
        state.id = localStorage.getItem('id');
       }
    }
  },
  actions: {
  },
  modules: {
  }
})         