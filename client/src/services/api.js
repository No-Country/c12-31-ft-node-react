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
    try{
        const response = await api.post('/auth/login',data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                }})
        return response.data
    } catch(error) {
        console.log(error)}
    }


export const allTransation = async () => {
    const response = await api.get('wallet/transaction')
    return response.data
}


export const newTransaction = async (data) => {
    try{
        const response = await api.post('/wallet/transaction',data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                }})
        return response.data
    } catch(error) {
        console.log(error)}
    }