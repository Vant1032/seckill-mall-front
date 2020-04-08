import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:8082',
    timeout: 5 * 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
});

export default axios;
