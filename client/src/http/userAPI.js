import {$authHost,$host} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email,password) => {
    const {data} = await $host.post('api/users/registration', {email,password,role:'USER'})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}

export const login = async (email,password) => {
    const {data} = await $host.post('api/users/login', {email,password})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}

export const checkAuth = async () => {
    const {data} = await $authHost.post('api/users/auth', )
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}