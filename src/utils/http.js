import axios from 'axios';
import {URl} from './url';
import {is, curryN, gte} from 'ramda';

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});
const in200s = isWithin(200, 299);
const swappclient = axios.create({
  baseURL: URl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// export function login(url) {

//     return axios.get(API_URL + url);
//   }

function Login(params) {
  let url = URL / 'api-user/login';
  return swappclient
    .post(
      url,
      {password: 'dasharath', identity: 'fakedata'},
      {
        headers: {
          token: 'Bearer ' + 'params.token',
        },
      },
    )
    .then(response => {
      if (response.status) {
        return JSON.stringify(response);
      }
      return null;
    })
    .catch(error => {
      return null;
    });
}

export const http = {Login};
