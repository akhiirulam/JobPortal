import {BASE_URL} from '../utils/urls';
import axios from 'axios';
axios.defaults.withCredentials = true

export const popularJobCategoriesAPI = async()=>{
    const response = await axios.get(`${BASE_URL}/job/jobs`)
    return response.data
}