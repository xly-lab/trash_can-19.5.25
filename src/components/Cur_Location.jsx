/*
* 当前所选设备是否满溢
* */

import React, {Component} from 'react'
import {Progress} from 'antd-mobile'//下面注释部分，要用，请引入Toast
import PubSub from 'pubsub-js'
import {reqData} from '../api'

export default class  Cur_Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
          proportion:0,//proportion用来存储垃圾桶的多少占比/或使用多少
          IsFull:false,//垃圾桶是否满了
          status:0//垃圾桶是否打开
        }
    }
     componentDidMount(){
        reqData()
          .then((data)=>this.setState(
            {
              proportion:data.data.percentage*100,
              status:data.data.status
            }
            ));//保证初始状态

      // const {IsFull} =this.state;
      setInterval(async ()=>{//每十秒发送一次请求判断垃圾桶容量
        //此处发送ajax请求
        const response = await reqData();
        let proportion= response.data.percentage*100;
        if(proportion>90){
          this.setState({IsFull:true});
          const Time = Date.now();
          PubSub.publish('sendTime',Time);
        }else{
          this.setState({IsFull:false})
        }
        // if(IsFull){//垃圾桶已满后，记录时间，做出提醒
        //   const setId = setInterval(()=>{
        //     let i=-1;//用于记录当前垃圾桶满了多久
        //     i++;
        //     if(i>10){
        //       Toast.offline('现在垃圾桶已满，请倒垃圾',1.5)
        //     }
        //   },1000);//没一秒计时一次
        //   setTimeout(()=>{
        //     if(setId){
        //       clearInterval(setId)
        //     }
        //   },1000*15)
        // }
        if(proportion>=100){
          proportion=0;
         }
        this.setState({proportion})
      },10000);

      setInterval(async ()=>{//没0.5秒发送一次请求判断垃圾桶盖是否打开
        const response = await reqData();
        const {status} = response.data;
        this.setState({status});
      },500)
    };

    render() {
      const {IsFull,status} =this.state;
        return <div className="prerent-condition">
          <div className="mui-content">
            <div className="mui-card">
              <ul className="mui-table-view">
                <li className="mui-table-view-divider">垃圾桶状态</li>
                <li className="mui-table-view-cell">当前垃圾桶情况
                  <Progress
                    barStyle={IsFull?{borderColor:'red'}:null}
                    percent={this.state.proportion}
                    size="small"
                    status="active" />
                  {IsFull?<span className="mui-badge mui-badge-danger">滿</span>:                  <span className="mui-badge mui-badge-success">否</span>
                  }
                  {status===0?
                    <span style={{marginRight:30}} className="mui-badge mui-badge-blue">盖子：关</span>
                    :
                    <span style={{marginRight:30}} className="mui-badge mui-badge-yellow">盖子：开</span>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
    }

}
