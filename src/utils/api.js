import axios from 'axios';
import localstorage from 'localstorage';

import { baseUrl } from '../config/apiConfig';

const instance = axios.create({ baseUrl, timeout: 600000 })

export default {
  get: (url, data) => {
    return request({ method: 'get', url, data });
  },
  post: (url, data) => {
    return request({ method: 'post', url, data });
  },
  put: (url, data) => {
    return request({ method: 'put', url, data });
  },
  delete: (url, data) => {
    return request({ method: 'delete', url, data });
  },
}

const request = async (reqConfig) => {
  if (reqConfig.method === 'get') {
    return instance.request({
      method: reqConfig.method,
      url: reqConfig.url,
      params: reqConfig.data,
    }).then(res => res.data)
      .catch(err => handleError(err, reqConfig));
  } else {
    return instance.request({
      method: reqConfig.method,
      url: reqConfig.url,
      data: reqConfig.data,
    }).then(res => res.data)
      .catch(err => handleError(err))
  }
}

const refreshToken = async (reqConfig) => {
  // axios.post(`${apiBase}/oauth/token?grant_type=refresh_token&refresh_token=${token.refresh_token}`,
  //   null, { headers: { 'Authorization': `${basicAuth}` } }).then(async res => {
  //     await storage.removeItem('@token');
  //     await storage.setItem('@token', res.data);
  //     return request(reqConfig);
  //   }).catch(err => handleError(err));
};

const handleError = (err, reqConfig) => {
  if (err.response.data && err.response.data.error == 'invalid_token') {
    return refreshToken(reqConfig);
  } else if (err.response.data) {
    throw err.response.data;
  } else if (err.response) {
    throw err.response;
  } else {
    throw err;
  }
}