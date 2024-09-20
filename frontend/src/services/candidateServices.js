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

export const filterCandidateSearchAPI = async(filter)=>{
    try {
        const response = await axios.get(`${BASE_URL}/user/filter-candidate?tags=${filter.searchQuery}&qualification=${filter.qualification}&location=${filter.location}&category=${filter.category}&gender=${filter.gender}`)
        return response.data
    } catch (error) {
        console.log(error.response.data);
        
    }
}