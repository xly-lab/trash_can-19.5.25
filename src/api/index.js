/*
* 请求接口
* */

import ajax from './ajax'

//获取user数据
export const reqUser=()=>ajax('/v2/movie/top250?start=25&count=25');
//获取大神/老板信息列表

