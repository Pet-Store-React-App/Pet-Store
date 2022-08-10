import axios from "axios";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data;
}