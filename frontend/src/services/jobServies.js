import {BASE_URL} from '../utils/urls';
import axios from 'axios';
axios.defaults.withCredentials = true

export const popularJobCategoriesAPI = async()=>{
    try {
    const response = await axios.get(`${BASE_URL}/job/jobs`)
    return response.data    
    } catch (error) {
    console.log(error.data);   
    }
    
}
export const viewJobDetailsAPI = async(id)=>{
    try {
    const response = await axios.get(`${BASE_URL}/job/${id}`)
    return response.data
    } catch (error) {
    console.log(error.response.data);
    
    }
    
}