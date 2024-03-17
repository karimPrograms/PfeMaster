import api from '@/services/api'

export default{
    login(credentials){
        return api().post('login',credentials)
    },
    isloggedin(){
        return api().get('isloggedIn',{headers: {
            Cookie: document.cookie,
          }})
    }
}
