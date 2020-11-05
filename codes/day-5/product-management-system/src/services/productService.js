import Axios from 'axios';
import { apiUrl } from '../constants/apiUrl';

export const getProducts = () => {
    //Promise<AxiosResponse<any>>
    return Axios.get(apiUrl);
}


export const getProductById = (productId) => {
    return Axios.get(`${apiUrl}/${productId}`);
}

export const addProduct = (product) => {
    return Axios.post(apiUrl, product);
}

export const updateProduct = (product) => {
    return Axios.put(apiUrl, product);
}

export const deleteProductById = (productId) => {
    return Axios.delete(`${apiUrl}/${productId}`);
}
