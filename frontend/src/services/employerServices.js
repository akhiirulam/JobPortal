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
        console.log(filter);
        console.log(`${BASE_URL}/user/filter-employer?tags=${filter.searchQuery}&location=${filter.location}&category=${filter.locationDropdown}`);
        
        const response = await axios.post(`${BASE_URL}/user/filter-employer?tags=${filter.searchQuery}&location=${filter.location}&category=${filter.locationDropdown}`)
        return response
    } catch (error) {
        console.log(error.response.data);
        
    }
}