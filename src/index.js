import React from 'react'
import {render} from 'react-dom'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import App from './containers/App'
import ServiceLoc from './containers/ServiceLoc'

render(

    <HashRouter>
      <Switch>
        <Route path='/app' component={App}/>{/*默认组件*/}
        <Route path='/serviceloc' component={ServiceLoc}/>
        <Redirect to='/app'/>
      </Switch>
    </HashRouter>


,document.getElementById('root'));
