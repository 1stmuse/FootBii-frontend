
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import SignIn from './components/login_register'

import Home from './components/home'

class Routes extends Component{


  render(){
    return(
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={SignIn} />
      </Switch>
    )
  }


}
export default Routes;