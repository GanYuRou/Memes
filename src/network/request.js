import axios from 'axios';
import { message } from 'antd';

const request = {};

request.toastError = (errorMsg, type) => {
    setTimeout(() => {
        if (errorMsg && type) {
            message.success(errorMsg)
        } else{
            message.error(errorMsg)
        }
    }, 300)
}

// 响应拦截
axios.interceptors.response.use(response => {
    const { data } = response;
    const { data: { message = '' } } = data;
    if (data && data.code === 'failure') {
        request.toastError(message);
    } else {
        // 成功的显示
        message && request.toastError(message, 'success');
    }
    // 统一返回响应中data中的数据
    return response.data;
}, err => {
    console.log(err);
});

request.get = (url, option = {}) => {
    return axios.get(url, option).then((response) => {
        return response;
    })
}

request.post = (url, data, option = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, option)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const { response } = error;
                reject(response ? response : {});
            })
    })
}

export default request;
