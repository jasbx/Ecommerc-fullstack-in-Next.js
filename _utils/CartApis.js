const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post("/api/carts", payload);


const getCartItem=(email)=>axiosClient.get(`/api/carts?populate[products][populate]=img&filters[email][$eq]=${email}`)

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

export default {
  addToCart,
  getCartItem,
  deleteCartItem
 
};