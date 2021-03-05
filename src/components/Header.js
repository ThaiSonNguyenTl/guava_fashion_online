import React, { Component } from 'react'
import Nav from './Nav'
import {Route} from 'react-router-dom'
class Header extends Component{
 
    render() {
        return (
          <Route>
        <Nav/>    
      </Route>
     
        )}
}
export default Header

 