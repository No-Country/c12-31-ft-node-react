import axios from "axios"
import { baseURL } from "../config/env.config"


const api = axios.create({
    baseURL,
        }
        )


export const getUsers = async () => {
    const response = await api.get('/user')
    return response.data
}

export const register = async (data) => {
    const response = await api.post('/auth/register',data,
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            }})
    return response.data
}

export const loginUser = async (data) => {
    const response = await api.post('/auth/login',data,
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            }})
    return response.data
}