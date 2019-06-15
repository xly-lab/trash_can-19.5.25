import React, {Component} from 'react'
import {NavBar,WhiteSpace } from 'antd-mobile'

import Location from '../components/Location'
import CurLocation from '../components/Cur_Location'
import HosiTime from '../components/Hosi_Time'
import IsFull from '../components/Is_Full'

import '../mui/css/mui.min.css'
import '../mui/css/Progress.css'

// import {reqUser} from '../api'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
     }

    render() {
        return <div>
          <NavBar>智能垃圾桶</NavBar>
          {/*显示当前选择的设备位置*/}
          <Location/>
          {/*显示当前选择设备的状态*/}
          <CurLocation/>
          {/*显示当前设备的历史满溢时间*/}
          <HosiTime/>
          <WhiteSpace/>
          {/*显示所有设备中满了的设备*/}
          <IsFull/>
        </div>
    }

}
