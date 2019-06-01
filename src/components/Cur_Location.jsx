/*
* 当前所选设备是否满溢
* */

import React, {Component} from 'react'
import {Progress} from 'antd-mobile'
import PubSub from 'pubsub-js'

export default class  Cur_Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
          proportion:0,
          IsFull:false
        }
    }
    componentDidMount(){
      let {proportion} =this.state;
      setInterval(()=>{
        proportion+=10;
        if(proportion>=80){
          this.setState({IsFull:true})
        }else{
          this.setState({IsFull:false})
        }

        if(proportion>100){
          proportion=0;
           const Time = Date.now();
           PubSub.publish('sendTime',Time)
         }
        this.setState({proportion})
      },1000)
    };

    render() {
      const {IsFull} =this.state;
        return <div className="prerent-condition">
          <div className="mui-content">
            <div className="mui-card">
              <ul className="mui-table-view">

                <li className="mui-table-view-divider">是否满溢</li>
                <li className="mui-table-view-cell">当前存储器是否满溢
                  <Progress
                    barStyle={IsFull?{borderColor:'red'}:null}
                    percent={this.state.proportion}
                    size="small"
                    status="active" />
                  {IsFull?<span className="mui-badge mui-badge-danger">滿</span>:                  <span className="mui-badge mui-badge-success">否</span>
                  }
                </li>
              </ul>

            </div>
          </div>
        </div>
    }

}
