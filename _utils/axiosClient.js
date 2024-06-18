const { default: axios } = require("axios");
const apikey=process.env.NEXT_PUBLIC_REST_API_KETY;

const apiUrl="http://localhost:1337";

const axiosClient=axios.create({
baseURL:apiUrl,
headers:{
    Authorization:`Bearer${apikey}`

}
})

export default axiosClient;