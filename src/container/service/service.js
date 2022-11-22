import axios from '../../axios';
import authHeader from './auth-header';


const handleLogin2 = (email, password) => {
    return axios.post('http://localhost:8080/api/login', { email, password })
}
const registerUser = (data) => {
    return axios.post('http://localhost:8080/api/create-new-user', data)
}
const getAllUsers = async (data) => {
    return axios.get('http://localhost:8080/api/get-all-user', data)
}
const getAllGender = () => {
    return axios.get('http://localhost:8080/api/get-all-gender')
}
const handleDeleteUser = (data) => {
    return axios.get(`http://localhost:8080/api/delete-user?id=${data.id}`, data.data)
}
const handleEditUser = (data) => {
    return axios.post(`http://localhost:8080/api/edit-user`, data, {
        headers: authHeader()
    })
}
const getAllFilms = async () => {
    return axios.get('http://localhost:8080/api/get-all-film')
}
const getAllYear = () => {
    return axios.get('http://localhost:8080/api/get-all-year')
}
const handleCreateFilm = (data) => {
    return axios.post('http://localhost:8080/api/create-new-film', data ,{
        headers: authHeader()
    })
}
const getDetailFilm = (id) => {
    return axios.get(`http://localhost:8080/api/get-detail-film?id=${id}`)
}
const handleDeleteFilm = (data) => {
    return axios.get(`http://localhost:8080/api/delete-film?id=${data.id}`, data.data)
}
const handleEditFilm = (data) => {
    return axios.post(`http://localhost:8080/api/edit-film`, data ,{
        headers: authHeader()
    })
}
const logOut = () => {
    return axios.post(`http://localhost:8080/api/logout`)
}
const getActionFilms = async () => {
    return axios.get('http://localhost:8080/api/get-action-film')
}
const getEmotionFilms = async () => {
    return axios.get('http://localhost:8080/api/get-emotion-film')
}
const getRandomfilm = async () => {
    return axios.get('http://localhost:8080/api/get-random-film')
}

export {
    handleLogin2, registerUser, getAllUsers, getAllGender, handleDeleteUser, handleEditUser,
    getAllFilms, getAllYear, handleCreateFilm, getDetailFilm, handleDeleteFilm, handleEditFilm,
    logOut , getActionFilms , getEmotionFilms , getRandomfilm
}
