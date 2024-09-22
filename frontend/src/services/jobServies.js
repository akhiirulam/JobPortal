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
    console.log("dat=: ",response.data);
    
    return response.data
    } catch (error) {
    console.log(error.response.data);
    }
    
}
export const filterJobSearchAPI = async(filter)=>{
    console.log(filter);
    
    
    try {
        const response = await axios.get(`${BASE_URL}/job/job-filter?tags=${filter.searchQuery}&experienceLevels=${filter.experienceLevels}&location=${filter.location}&category=${filter.jobType}&&careerLevel=${filter.careerLevels}`)
        return response.data
    } catch (error) {
        console.log(error.response.data);
        
    }
}