/* eslint-disable */
import axios from 'axios';
import { toLower } from 'lodash';

let url = API_BASE_URL

// 创建axios实例
export var instance = axios.create({
    baseURL: url,
    timeout: 30000,
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    if(config.method.toLowerCase() === 'get'){
      if(config.url.indexOf('&')){
        config.url += `&language=${localStorage.getItem('languageSet') || 'zh-CN'}`
      }else{
        config.url += `?language=${localStorage.getItem('languageSet') || 'zh-CN'}`
      }
    }
    return config;
}, function (error) {
    // Do something with request error
    // alert("连接服务器失败,关掉后重新打开试试");
})

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        var res = response.data;
        return res
    },
    function (error) {
        return Promise.reject(error);
    });
