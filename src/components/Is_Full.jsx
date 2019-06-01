/*
* 当前时间段有哪些垃圾桶已经满了
* */

import React, {Component} from 'react'
import PubSub from 'pubsub-js'


export default class Is_Full extends Component {
    constructor(props) {
        super(props);

        this.state = {
          targetTimes:[]
        }

    }
    componentDidMount(){
      const  targetTimes=[];
      PubSub.subscribe("sendFirTime",(msg,targetTime)=>{
        targetTimes.unshift(targetTime);
        if(targetTimes.length>3){
          targetTimes.pop()
        }
         this.setState({targetTimes})
      })
    }

    render() {
      const {targetTimes} =this.state;
        return <div className="history-time">
        <div className="mui-content mui-card">
        <h5 className="mui-content-padded" style={{margin: "35px 10px 15px 10px"}}>已满设备</h5>
      <ul id="OA_task_1" className="mui-table-view">

        {targetTimes.length!==0?
         targetTimes.map((tarTime,i)=>(
           <li key={i} className="mui-table-view-cell">
             <div className="mui-slider-handle">
               {tarTime.newLocation}  &nbsp;&nbsp; 时间：{tarTime.time}
             </div>
           </li>
         ))
          :<li className="mui-table-view-cell">没有垃圾桶已满</li>}

      </ul>

      </div>
    </div>
    }

}
