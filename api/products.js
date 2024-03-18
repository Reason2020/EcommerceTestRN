import axios from 'axios'

const BASE_API_URL = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
    const response = await axios.get(`${BASE_API_URL}/products`)
    return response.data
}

export const getPopularProducts = async () => {
    const response = await axios.get(`${BASE_API_URL}/products?limit=5`)
    return response.data
}

export const getProductById = async (id) => {
    const response = await axios.get(`${BASE_API_URL}/products/${id}`)
    return response.data
}

export const getAllCategoriesList = async () => {
    const response = await axios.get(`${BASE_API_URL}/products/categories`)
    return response.data
}
