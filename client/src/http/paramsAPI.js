import {$authHost,$host} from "./index";
import jwtDecode from "jwt-decode";

export const createParams = async (params) => {
    const {data} = await $host.post('/api/params', params)
    return data
}

export const fetchParams = async () => {
    const {data} = await $host.get('api/params')
    return data
}


// export const fetchParams = async (id) => {
//     const {data} = await $host.get('api/params/')
//     return data
// }