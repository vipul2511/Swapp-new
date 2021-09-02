import axios from "axios";
const URL = 'https://data-stage.hubioid.com';

export function sendEmail(data) {
    console.log('service')
    console.log(data)
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/verification/code`,
        data: {data}
    });
}

export function sendCode(data) {
    return axios.request({
        method: 'post',
        url: `${URL}/api/v1/mobile/user/check/verification/code`,
        data: {data}
    });
}
