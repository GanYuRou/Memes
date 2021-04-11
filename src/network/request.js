import axios from 'axios';

const request = {};

request.get = (url, option = {}) => {
    return axios.get(url, option).then((response) => {
        return response.data;
    })
}

request.post = (url, data, option = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, option)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            const { response } = error;
            reject(response ? response : {});
        })
    })
}

// 请求拦截
// axios.interceptors.request.use(config => {
//     return config;
// }, err => {
//     console.log(err);
// })

// 响应拦截
// axios.interceptors.response.use(resp => {
//     return resp.data;
// }, err => {
//     console.log(err);
// });

export default request;
