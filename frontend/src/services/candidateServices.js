import {BASE_URL} from '../utils/urls';
import axios from 'axios';
axios.defaults.withCredentials = true

export const viewCandidateDataAPI = async(id)=>{
    try {
    const response = await axios.get(`${BASE_URL}/user/candidate/${id}`)
    return response.data 
    } catch (error) {
    console.log(error);   
    }    
}