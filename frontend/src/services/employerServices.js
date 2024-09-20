import {BASE_URL} from '../utils/urls';
import axios from 'axios';
axios.defaults.withCredentials = true

export const viewEmployerDataAPI = async(id)=>{
    try {
    const response = await axios.get(`${BASE_URL}/user/employer/${id}`)
    return response.data 
    } catch (error) {
    console.log(error);   
    }    
}

export const filterEmployerSearchAPI = async(filter)=>{
    try {
        const response = await axios.get(`${BASE_URL}/user/filter-employer?tags=${filter.searchQuery}&pincode=${filter.pincode}&location=${filter.location}&category=${filter.category}`)
        return response.data
    } catch (error) {
        console.log(error.response.data);
        
    }
}