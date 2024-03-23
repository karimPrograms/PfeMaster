import api from '@/services/api'

export default{
    getUserInfo(id){
        return api().post('getUserInfo',id)
    },
    doTransaction(info){
        return api().post('doTransaction',info)        
    },
    getHistory(id){
        return api().post('getHistory',id)
    }

}