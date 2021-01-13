import axios from "axios"
axios.interceptors.response.use((ret)=>{
    return ret.data || ret
})
export default axios