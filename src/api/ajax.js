/*
* 封装ajax
* */

import axios from 'axios'
export default function ajax(url,data,type='GET') {
  if(type==='GET'){//发送get 请求
    if(data===undefined){
      return axios.get(url)
    }
    let pramesStr='';
    Object.keys(data).forEach(key=>{
      pramesStr+=key+'='+data[key]+'&'
    });
    if(pramesStr){
      pramesStr=pramesStr.substring(0,pramesStr.length-1);
    }
    return axios.get(url+'?'+pramesStr)
  }
  else{//发送post请求
    return axios.post(url,data)
  }

}
