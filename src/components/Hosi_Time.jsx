/*
* 历史垃圾桶满溢时间
* */

import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import moment from 'moment'

export default class  Hosi_Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
          Times:[]//用来存储满溢时间的，只存放三个
        }
    }
    componentDidMount(){
      const newLocation =JSON.parse(localStorage.getItem('chooseLocation'));
      const Times =[];
      PubSub.subscribe('sendTime',(msg,Time)=>{
        const time=moment(Time).format('YY.MM.DD HH:mm:ss');
        Times.unshift(time);
        if(Times.length>3){
          Times.pop();
        }
        const targetTime ={time:Times[0],newLocation};
        PubSub.publish('sendFirTime',targetTime);
        this.setState({Times})
      });



    }

    render() {

          const {Times} = this.state;
        return  <div className="history-time">
          <div className="mui-content mui-card">
            <h5 className="mui-content-padded" style={{margin:'35px 10px 15px 10px'}}>历史满溢时间</h5>
            <ul id="OA_task_1" className="mui-table-view">

              {Times.length!==0?
                Times.map((time,i)=>(
                <li key={i} className="mui-table-view-cell">

                  <div className="mui-slider-handle">
                    满溢：满 时间：{time}
                  </div>
                </li>)):
                <li className="mui-table-view-cell">没有垃圾桶已满</li>
              }
            </ul>
          </div>
        </div>
    }

}
