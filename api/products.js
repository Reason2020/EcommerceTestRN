import axios from 'axios'

const BASE_API_URL = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products`)
        return response.data
    } catch (err) {
        return []
    }
}

export const getFilteredProducts = async (category) => {
    try {
        const response = await axios.get(category === 'All' ? `${BASE_API_URL}/products` : `${BASE_API_URL}/products/category/${category}`)
        return response.data
    } catch (err) {
        return []
    }
}

export const getProductsInDescendingOrder = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products?sort=desc`)
        return response.data
    } catch(err) {
        return []
    }
}

export const getPopularProducts = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products?limit=5`)
        return response.data
    } catch (err) {
        return []
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products/${id}`)
        return response.data
    } catch (err) {
        return []
    }
}

export const getAllCategoriesList = async () => {
    try {
        const response = await axios.get(`${BASE_API_URL}/products/categories`)
        return response.data
    } catch (err) {
        return []
    }
}
