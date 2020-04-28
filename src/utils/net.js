import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://' + process.env.VUE_APP_BACKEND_URL + ':' + process.env.VUE_APP_BACKEND_PORT + '/api',
    timeout: 300 * 1000,
    withCredentials: true,
});

export default axios;
