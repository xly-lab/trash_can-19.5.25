/*
* 当前所选设备是否满溢
* */

import React, {Component} from 'react'
import {Progress} from 'antd-mobile'

export default class  Cur_Location extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return <div className="prerent-condition">
          <div className="mui-content">
            <div className="mui-card">
              <ul className="mui-table-view">

                <li className="mui-table-view-divider">是否满溢</li>
                <li className="mui-table-view-cell">当前存储器是否满溢
                  <Progress percent={50} size="small" status="active" />
                  <span className="mui-badge mui-badge-success">否</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
    }

}
