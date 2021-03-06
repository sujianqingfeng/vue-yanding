// 引入axios
import axios from 'axios'
import {getCookie} from '../utils/cookie'

axios.interceptors.request.use(config => {
  let csrftoken = getCookie('csrftoken')
  if (csrftoken) config.headers['X-CSRFToken'] = `${csrftoken}`
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    console.error('发生错误　这里可以进行一些异常处理')
  }

  return Promise.reject(error.response)
})

axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

const request = (method, url, param) => new Promise((resolve, reject) => {
  axios({
    method: method,
    url,
    params: method === 'get' ? param : '',
    data: method !== 'get' ? param : '',
    withCredentials: true
  }).then(res => {
    resolve(res)
  }).catch(error => {
    reject(error)
  })
})

export default {
  get (url, param) {
    return request('get', url, param)
  },
  post (url, param) {
    return request('post', url, param)
  },
  delete (url, param) {
    return request('delete', url, param)
  },
  patch (url, param) {
    return request('patch', url, param)
  },
  put (url, param) {
    return request('put', url, param)
  }
}
