/*
* 设备地点表单
* */

import React, {Component} from 'react'
import {Modal,NavBar} from 'antd-mobile'

import '../mui/css/NavBar.css'

const alert = Modal.alert;

export default class ServiceLoc extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goApp=()=>{

    };
    AlterWarm=(e)=>{
      this.location=e.target.innerText;
      console.log(this.location);
        alert('Choose', `Are you sure ${this.location}`, [
          { text: 'Cancel', onPress: () => {} },
          { text: 'Ok', onPress: () =>
            {
              this.props.history.replace('/app');
              // console.log('ok');
              localStorage.setItem('chooseLocation',JSON.stringify(this.location))
              }
            },
        ])

    };
    render() {
        return <div>

          <NavBar className='am-navbar1'
          mode="dark"
          leftContent="返回"
          onLeftClick={()=>this.props.history.replace('/app')}
        >选择所在地</NavBar>
          <div className="choose" style={{paddingTop:'45px'}}>

            <div className="mui-content">
              <div id='list' className="mui-indexed-list">

                <div className="mui-indexed-list-alert"> </div>
                <div className="mui-indexed-list-inner">
                  <ul className="mui-table-view" onClick={this.AlterWarm} >

                    <li data-group="B" className="mui-table-view-divider mui-indexed-list-group">B</li>
                    <li data-value="BXL" data-tags="BoXueLou"
                        className="mui-table-view-cell mui-indexed-list-item">博学楼
                    </li>

                    <li data-group="J" className="mui-table-view-divider mui-indexed-list-group">J</li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu1"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓1
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu2"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓2
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu4"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓4
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu6"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓6
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu9"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓9
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu11"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓11
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu12"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓12
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu15"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓15
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu16"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓16
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu18"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓18
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu19"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓19
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu20"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓20
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu25"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓25
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu30"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓30
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu31"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓31
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu32"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓32
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu33"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓33
                    </li>
                    <li data-value="JSGY" data-tags="JiaoShiGongYu40"
                        className="mui-table-view-cell mui-indexed-list-item">教师公寓40
                    </li>

                    <li data-group="M" className="mui-table-view-divider mui-indexed-list-group">M</li>
                    <li data-value="MLL" data-tags="MingLiLou"
                        className="mui-table-view-cell mui-indexed-list-item">明理楼
                    </li>
                    <li data-value="MDL" data-tags="MingDeLou"
                        className="mui-table-view-cell mui-indexed-list-item">明德楼
                    </li>
                    <li data-value="MZL" data-tags="MingZhiLou"
                        className="mui-table-view-cell mui-indexed-list-item">明志楼
                    </li>
                    <li data-value="MBL" data-tags="MingBianLou"
                        className="mui-table-view-cell mui-indexed-list-item">明辨楼
                    </li>

                    <li data-group="X" className="mui-table-view-divider mui-indexed-list-group">X</li>
                    <li data-value="XSSS" data-tags="XueShengSuShe1"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍1
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe2"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍2
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe3"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍3
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe4"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍4
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe5"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍5
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe7"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍7
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe9"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍9
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe12"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍12
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe13"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍13
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe14"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍14
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe15"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍15
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe16"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍16
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe17"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍17
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe18"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍18
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe19"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍19
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe20"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍20
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe21"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍21
                    </li>
                    <li data-value="XSSS" data-tags="XueShengSuShe22"
                        className="mui-table-view-cell mui-indexed-list-item">学生宿舍22
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    }

}
