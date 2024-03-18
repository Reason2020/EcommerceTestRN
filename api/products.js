import axios from 'axios'

const BASE_API_URL = 'https://fakestoreapi.com'

export const getPopularProducts = async () => {
    const response = await axios.get(`${BASE_API_URL}/products?limit=5`)
    console.log('Response: ', response.data)
    return response.data
}