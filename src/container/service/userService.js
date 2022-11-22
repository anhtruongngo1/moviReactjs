import axios from '../../axios';
import authHeader from './auth-header';
let URL = "http://localhost:8080"


const getUserDetail = (id) => {
    return axios.get(`${URL}/api/get-user-detail?id=${id}`)
}
const postToCart = (data) => {
    return axios.post(`${URL}/api/add-to-card`,data)
}
const getToCart = (id) => {
    return axios.get(`${URL}/api/get-cart-user?id=${id}`)
}
const sendEmail = (data) => {
    return axios.post(`${URL}/api/send-remedy`,data)
}
export  {
    getUserDetail , postToCart , getToCart , sendEmail

}