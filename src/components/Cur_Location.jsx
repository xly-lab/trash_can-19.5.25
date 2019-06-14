/*
* 当前所选设备是否满溢
* */

import React, {Component} from 'react'
import {Progress} from 'antd-mobile'
import PubSub from 'pubsub-js'
import {reqData} from '../api'

export default class  Cur_Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
          proportion:0,//proportion用来存储垃圾桶的多少占比/或使用多少
          IsFull:false,//垃圾桶是否满了
          posts:''
        }
    }
    componentDidMount(){
      // axios.get('http://123.57.61.227:8080/Web_war/detection')
      //
      //   .then(res => {
      //
      //     const posts = res.data.data.children.map(obj => obj.data);
      //
      //     this.setState({ posts });
      //
      //   });

      setInterval(async ()=>{
        //此处发送ajax请求
        const response = await reqData();
        let proportion= response.data.percentage*100;
        console.log(proportion);
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
      },1000*10)
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
