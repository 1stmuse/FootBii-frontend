
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'


import SignIn from './components/login_register'
import Home from './components/home'
import ShoeDetails from './components/shoeInfo/index'

class Routes extends Component{


  render(){
    return(
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shoe/:id' component={ShoeDetails} />
          <Route path='/signin' component={SignIn} />
      </Switch>
    )
  }


}
export default Routes;