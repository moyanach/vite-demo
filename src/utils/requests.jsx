import axios from 'axios';
import { notification } from 'antd';

const reuqests = axios.create()

reuqests.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  notification.error(err)
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
reuqests.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  const response = error.response
  const stautsCode = response.request.status
  const statusText = response.request.statusText
  const data = response.data
  const {code, detail} = data
  notification.error({message: `${stautsCode} ${statusText}`, description: detail || statusText})
  return Promise.reject(error);
});

export default reuqests


