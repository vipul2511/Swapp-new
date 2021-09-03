import axios from 'axios';
const URL = 'https://data-stage.hubioid.com';

export function sendEmail(data) {
  console.log('service------');
  console.log(data);
  console.log(data.email);
  return axios.request({
    method: 'post',
    url: 'https://data-stage.hubioid.com/api/v1/client/auth/send_verification_code',
    headers: {'content-type': 'application/json'},
    // data: {
    //     email: 'mahirfaker014@yopmail.com',
    //     is_credit: true,
    //     name: 'mahir',
    //     password: 'acdfkdjfdkljf',
    //   },
    
    data: {
      email: data.email,
      is_credit: data.is_credit,
      name: data.name,
      password: data.password,
    },
  });
}

export function sendCode(data) {
  return axios.request({
    method: 'post',
    url: `${URL}/api/v1/mobile/user/check/verification/code`,
    data: {data},
  });
}

export function sendwording(data) {
  return axios.request({
    method: 'post',
    headers: {'content-type': 'application/json'},
    url: `${URL}/api/v1/mobile/set/wording`,
    data: {},
  });
}
