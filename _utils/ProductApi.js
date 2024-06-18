
const { default: axiosClient } = require("./axiosClient");


const getLatestProduct=()=>axiosClient.get('/api/products?populate=*');

const getProductById=(id)=>axiosClient.get(`/api/products/${id}?populate=*`)

const getProductByFilter=(category)=>axiosClient.get(`/api/products?filters[category][$eq]=${category}&populate=*`)
export default {
    getLatestProduct,
    getProductById,
    getProductByFilter

}
