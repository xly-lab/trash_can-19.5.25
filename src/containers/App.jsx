import React, {Component} from 'react'
import {NavBar,WhiteSpace } from 'antd-mobile'

import Location from '../components/Location'
import CurLocation from '../components/Cur_Location'
import HosiTime from '../components/Hosi_Time'
import IsFull from '../components/Is_Full'

import '../mui/css/mui.min.css'
import '../mui/css/Progress.css'

import {reqUser} from '../api'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
     }
    componentDidMount(){
       setInterval(async()=>{
        const response = await reqUser();
         const reslut =response.data;
         console.log(reslut)
      },10000 )
    }
    render() {
        return <div>
          <NavBar>智能垃圾桶</NavBar>
          <Location/>
          <CurLocation/>
          <HosiTime/>
          <WhiteSpace/>
          <IsFull/>
        </div>
    }

}
