import Axios from "axios";
import _ from 'lodash';

const axios = Axios.create({
    baseURL: 'http://localhost:8082/api',
    timeout: 300 * 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: data => {
        let f = new FormData();
        let array = Object.keys(_.defaultTo(data, {}));
        for (const x of array) {
            f.append(x, data[x]);
        }
        return f;
    },
});

export default axios;
