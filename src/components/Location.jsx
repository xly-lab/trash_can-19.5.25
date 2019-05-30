/*
* 当前所选地址
* */

import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    setLocation=()=>{
      const newLocation =JSON.parse(localStorage.getItem('chooseLocation'));
      this.e.childNodes[0].innerText=newLocation || '思学楼'
    };
    componentDidMount(){
      this.setLocation()

    };
    render() {
        return           <div className="location">
          <div className="mui-content">
            <div className="mui-card">
              <ul className="mui-table-view">
                <li className="mui-table-view-divider">当前设备位置</li>
                <li className="mui-table-view-cell" ref={e=>this.e=e}>
                  <NavLink className="mui-navigate-right"  to='/serviceloc'>
                    思学楼
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

    }

}
