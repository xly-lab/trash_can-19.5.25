/*
* 当前时间段有哪些垃圾桶已经满了
* */

import React, {Component} from 'react'


export default class Is_Full extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return <div className="history-time">
        <div className="mui-content mui-card">
        <h5 className="mui-content-padded" style={{margin: "35px 10px 15px 10px"}}>已满设备</h5>
      <ul id="OA_task_1" className="mui-table-view">
        <li className="mui-table-view-cell">
          <div className="mui-slider-right mui-disabled">

          </div>
          <div className="mui-slider-handle">
            思学楼A   时间：18.10.23
          </div>
        </li>
        <li className="mui-table-view-cell">
          <div className="mui-slider-right mui-disabled">

          </div>
          <div className="mui-slider-handle">
            思学楼B  时间：18.10.23
          </div>
        </li>
        <li className="mui-table-view-cell">
          <div className="mui-slider-right mui-disabled">

          </div>
          <div className="mui-slider-handle">
            思学楼C 时间：18.10.23
          </div>
        </li>

      </ul>

      </div>
    </div>
    }

}
