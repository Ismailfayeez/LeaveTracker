import axios from "axios";
import { apiCallBegan,apiCallSuccess,apiCallFailure } from "../apiactions"
import http from "../../services/httpService";

const api=({dispatch})=>(next)=>async (action)=>{
    if(action.type!=apiCallBegan.type) return next(action);
    const {url,method,data,onSuccess,context}=action.payload;
    next(action);
    try{
        const response=await http.request(
            {
                baseURL: 'http://127.0.0.1:8000/',
                url,
                method,
                data,
            }
        )
        // general
        dispatch(apiCallSuccess(response.data))
        console.log(onSuccess)
        const action={}
        action.type=onSuccess
        action.payload={}
        if(context) action.payload.context=context
        if(onSuccess) {
            action.payload.data=response.data
            dispatch(action)
        }
        return Promise.resolve(response) 
    }
    catch(err){
        return Promise.reject(err)
        
    }
}
export default api;