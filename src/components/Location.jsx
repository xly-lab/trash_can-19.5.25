/*
* 当前所选地址
* */

import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
          locaName:'思学楼'
        }
    }
    setLocation=()=>{
      const locaName =JSON.parse(localStorage.getItem('chooseLocation'));
      this.setState({locaName});
    };
    componentDidMount(){
      this.setLocation()

    };
    render() {

    const {locaName} = this.state;
        return           <div className="location">
          <div className="mui-content">
            <div className="mui-card">
              <ul className="mui-table-view">
                <li className="mui-table-view-divider">当前设备位置</li>
                <li className="mui-table-view-cell">
                  <NavLink className="mui-navigate-right"  to='/serviceloc'>
                    {locaName}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

    }

}
